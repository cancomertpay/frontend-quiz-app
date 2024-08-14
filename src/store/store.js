import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
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

  // computed
  const currentQuestion = computed(
    () => currentQuiz.value.questions[currentQuestionIndex.value]
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
    return 'SELECTION_IDLE';
  });

  // watch
  watch(questionStatus, (value) => {
    if (value === 'PICKED_CORRECTLY') quizScore.value++;
  });

  // Methods
  const selectQuiz = (quizName) => {
    currentQuiz.value = quizData.quizzes.find(
      (quiz) => quiz.title.toLocaleLowerCase() === quizName.toLocaleLowerCase()
    );

    currentQuestionIndex.value = 0;
    selectedOption.value = null;
    usersAnswer.value = null;
  };

  const nextQuestion = () => {
    if (currentQuiz.value) currentQuestionIndex.value++;

    selectedOption.value = null;
    usersAnswer.value = null;
  };

  const submitAnswer = () => {
    usersAnswer.value = selectedOption.value;
  };

  const selectOption = (option) => (selectedOption.value = option);

  const playAgain = () => {
    currentQuiz.value = null;
    selectedOption.value = null;
    usersAnswer.value = null;
    currentQuestionIndex.value = 0;
    quizScore.value = 0;
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
    selectQuiz,
    selectOption,
    submitAnswer,
    nextQuestion,
    playAgain,
  };
});
