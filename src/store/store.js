import { defineStore } from 'pinia';
import { computed, onUnmounted, ref, watch } from 'vue';
import quizData from './../../data.json';

export const useThemeStore = defineStore('theme', () => {
  // Initialize theme
  const savedTheme = localStorage.getItem('theme');

  const isDarkMode = ref(
    savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Function to toggle theme
  const toggleTheme = () => {
    // Toggle the theme
    isDarkMode.value = !isDarkMode.value;

    // Update local storage
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  };

  // Watch for changes to `isDarkMode` and update local storage accordingly
  watch(isDarkMode, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  });

  // Reactive class for body or root element
  const themeClass = computed(() => (isDarkMode.value ? 'dark' : ''));

  return { isDarkMode, toggleTheme, themeClass };
});

export const useQuizStore = defineStore('quiz', () => {
  const quizList = quizData.quizzes.map((quiz) => ({
    title: quiz.title,
    icon: quiz.icon,
  }));

  // states
  const currentQuiz = ref(null);
  const selectedOption = ref(null);
  const usersAnswer = ref(null);
  const currentQuestionIndex = ref(0);
  const quizScore = ref(0);
  const isSubmitted = ref(false);
  const timer = ref(0);
  const timerInterval = ref(null);

  // computed
  const currentQuestion = computed(
    () => currentQuiz.value?.questions[currentQuestionIndex.value]
  );

  const questionStatus = computed(() => {
    if (selectedOption.value && !usersAnswer.value) return 'SELECTION_ACTIVE';
    else if (
      usersAnswer.value &&
      currentQuestion.value.answer === usersAnswer.value
    )
      return 'PICKED_CORRECTLY';
    else if (
      usersAnswer.value &&
      currentQuestion.value.answer !== usersAnswer.value
    )
      return 'PICKED_INCORRECTLY';
    else if (isSubmitted.value && !usersAnswer.value && timer.value === 0)
      return 'TIME_EXPIRED';
    else if (isSubmitted.value && timer.value > 0) return 'NOTHING_SELECTED';
    return 'SELECTION_IDLE';
  });

  watch(questionStatus, (newValue, oldValue) => {
    if (
      newValue === 'SELECTION_IDLE' ||
      (oldValue === 'SELECTION_IDLE' && !timerInterval.value)
    ) {
      startTimer();
    } else if (
      newValue !== 'NOTHING_SELECTED' &&
      newValue !== 'SELECTION_ACTIVE'
    ) {
      pauseTimer();
    }

    if (newValue === 'PICKED_CORRECTLY') {
      quizScore.value++;
    }
  });

  watch(timer, (newValue) => {
    if (newValue === 0 && !usersAnswer.value) {
      submitAnswer();
    }
  });

  onUnmounted(() => {
    if (timerInterval.value) {
      clearInterval(timerInterval.value);
    }
  });

  // Methods
  const startTimer = () => {
    timer.value = 10;

    if (timerInterval.value) {
      clearInterval(timerInterval.value);
    }

    timerInterval.value = setInterval(() => {
      timer.value -= 0.1;
      if (timer.value <= 0) {
        clearInterval(timerInterval.value);
        timer.value = 0;
      }
    }, 100);
  };

  const pauseTimer = () => {
    if (timerInterval.value) {
      clearInterval(timerInterval.value);
      timerInterval.value = null;
    }
  };

  const selectQuiz = (quizName) => {
    currentQuiz.value = quizData.quizzes.find(
      (quiz) => quiz.title.toLocaleLowerCase() === quizName.toLocaleLowerCase()
    );

    currentQuestionIndex.value = 0;
    selectedOption.value = null;
    usersAnswer.value = null;
    startTimer();
  };

  const nextQuestion = () => {
    isSubmitted.value = false;
    if (currentQuiz.value) currentQuestionIndex.value++;

    selectedOption.value = null;
    usersAnswer.value = null;
  };

  const submitAnswer = () => {
    isSubmitted.value = true;
    usersAnswer.value = selectedOption.value;
  };

  const selectOption = (option) => {
    selectedOption.value = option;
  };

  const playAgain = () => {
    currentQuiz.value = null;
    selectedOption.value = null;
    usersAnswer.value = null;
    currentQuestionIndex.value = 0;
    quizScore.value = 0;
    isSubmitted.value = false;
  };

  return {
    quizList,
    currentQuiz,
    usersAnswer,
    questionStatus,
    currentQuestion,
    currentQuestionIndex,
    selectedOption,
    quizScore,
    timer,
    selectQuiz,
    selectOption,
    submitAnswer,
    nextQuestion,
    playAgain,
  };
});
