import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { app_code_label_text_set } from "./app_code_label_text_set.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_lesson_quiz_render_correction } from "./app_code_lesson_quiz_render_correction.mjs";
import { app_code_quiz_correction } from "./app_code_quiz_correction.mjs";
import { app_code_lesson_quiz_correction_code_set } from "./app_code_lesson_quiz_correction_code_set.mjs";
import { app_code_lesson_quiz_show_correction } from "./app_code_lesson_quiz_show_correction.mjs";
import { app_code_quiz_reveal_button } from "./app_code_quiz_reveal_button.mjs";
import { html_clear } from "./html_clear.mjs";
import { not } from "./not.mjs";
export function app_code_review_exercise_superseded(
  parent,
  exercise,
  on_correct,
  on_incorrect,
) {
  "render one review question; on_incorrect fires on a wrong answer, on_correct(clean) fires when finally answered correctly (clean is false if any wrong attempt happened first)";
  "A WRONG ANSWER IS NOT ANSWERED BY SHOWING THE ANSWER. The learner is told they were wrong and left to go on trying, and the answer waits under a button of its own. This screen used to put the answer up the instant anything went wrong, which is the one moment it helps least: a learner who was one tap away from working it out never finds out that they were.";
  "WHICH WORDING OF THE ANSWER IS SHOWN FOLLOWS WHAT THE LEARNER HAS BUILT. A quiz whose answer can be written more than one way says which way it is aiming at as the learner narrows it down, and that is the one the button shows. Shown the wording the question happened to be written in, a learner who has correctly built 2 * would be told the answer is 2 + 2 * 3 - which calls their own first two pieces a mistake when they were not.";
  "The answer is drawn from the moment the question opens and kept invisible, exactly as the lesson's own quiz draws it, so that asking for it swaps nothing into place and the page under the learner's finger does not jump. It is drawn again, still invisible, each time the wording being aimed at changes - and after the learner has asked, drawing it again is what keeps what they are looking at true.";
  let info = property_get(exercise, "info");
  let question = property_get(exercise, "question");
  let answer = property_get(exercise, "answer");
  let batch_get = property_get(exercise, "batch_get");
  let question_label = property_get(info, "question_label");
  let on_question = property_get(info, "on_question");
  let answer_label = property_get(info, "answer_label");
  let answer_property = property_get(info, "answer_property");
  let on_answer = property_get(info, "on_answer");
  let qa = {
    question,
    answer,
  };
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let a = app_code_lesson_above(
    parent,
    question_label,
    quiz_question,
    on_question,
  );
  let a_container = property_get(a, "container");
  let answer_label_div = app_code_example_answer_label(
    a_container,
    answer_label,
  );
  function answer_label_set(said) {
    "let a quiz say something new over its answers, for the quizzes whose question is worked out in steps and whose asking changes as the steps go";
    "offered here as well as on the lesson's own quiz, and not because a review looks any different: a quiz that is handed this on one screen and not on the other is a quiz that works on one screen and throws on the other, and the review is the screen nobody tries first";
    app_code_label_text_set(answer_label_div, said);
  }
  let answers_div = html_div(a_container);
  let container_correction = html_div(parent);
  app_code_lesson_quiz_render_correction(
    container_correction,
    app_code_quiz_correction,
    qa,
  );
  let correction_code_set = app_code_lesson_quiz_correction_code_set(
    container_correction,
    app_code_quiz_correction,
    qa,
    answer_property,
  );
  function on_reveal() {
    app_code_lesson_quiz_show_correction(container_correction);
  }
  app_code_quiz_reveal_button(parent, on_reveal);
  let failed = false;
  function on_wrong() {
    failed = true;
    on_incorrect();
  }
  async function on_success() {
    html_clear(container_correction);
    let clean = not(failed);
    await on_correct(clean);
  }
  on_answer(
    answers_div,
    info,
    qa,
    on_success,
    on_wrong,
    batch_get,
    correction_code_set,
    answer_label_set,
  );
}
