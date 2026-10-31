import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { app_code_program_step_through_generic } from "./app_code_program_step_through_generic.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_program_step_correction } from "./app_code_program_step_correction.mjs";
export function app_code_lesson_quiz_step_info() {
  arguments_assert(arguments, 0);
  ("the step-by-step quiz as one quiz type: the learner runs the question's program a line at a time - picks the next line, says what it does, and does it - until they say the program is complete");
  ("2026-10-31, at the human's asking - combine the step lessons with the regular lessons, so step by step is just one quiz type: taken out of the step lesson generic so any lesson can ask for it beside its other quizzes");
  function step_quiz(
    parent,
    info,
    qa,
    on_success,
    on_wrong,
    batch_get,
    correction_code_set,
  ) {
    "the quiz: the same answering as the worked example";
    let question = property_get(qa, "question");
    ("the answer shown is the list of presses, so what is handed to it is how many of them are done, and it is drawn again with each one; 2026-10-23, at the human's asking, so the steps pressed turn green and the next one glows");
    let pressed = {
      done: 0,
      look_here: null,
    };
    function on_step() {
      property_set(pressed, "done", property_get(pressed, "done") + 1);
      correction_code_set(pressed);
    }
    let stepping = app_code_program_step_through_generic(
      parent,
      question,
      on_wrong,
      on_success,
      null,
      on_step,
    );
    ("the step-through hands back how to point at its choice only once it is drawn, so the answer is drawn after it");
    let value = property_get(stepping, "look_here");
    property_set(pressed, "look_here", value);
    correction_code_set(pressed);
  }
  let info = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "",
    answer_on_button: app_code_brace_marked_div,
    answer_count_override: null,
    on_answer: step_quiz,
    correction: app_code_program_step_correction,
  };
  return info;
}
