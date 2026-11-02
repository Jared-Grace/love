import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_lesson_quiz_step } from "./app_code_lesson_quiz_step.mjs";
import { app_code_program_step_correction } from "./app_code_program_step_correction.mjs";
export function app_code_lesson_quiz_step_info() {
  arguments_assert(arguments, 0);
  ("the step-by-step quiz as one quiz type: the learner runs the question's program a line at a time - picks the next line, says what it does, and does it - until they say the program is complete");
  ("2026-10-31, at the human's asking - combine the step lessons with the regular lessons, so step by step is just one quiz type: taken out of the step lesson generic so any lesson can ask for it beside its other quizzes");
  let info = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "",
    answer_on_button: app_code_brace_marked_div,
    answer_count_override: null,
    on_answer: app_code_lesson_quiz_step,
    correction: app_code_program_step_correction,
  };
  return info;
}
