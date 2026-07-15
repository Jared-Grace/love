import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { html_div } from "./html_div.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_exercise(parent, exercise, on_complete) {
  "render one review question; on_complete(clean) fires when answered correctly, clean is false if any wrong attempt happened first";
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
  app_code_example_answer_label(a_container, answer_label);
  let answers_div = html_div(a_container);
  let failed = false;
  function on_wrong() {
    failed = true;
  }
  async function on_success() {
    await sleep_success_color();
    let clean = not(failed);
    await on_complete(clean);
  }
  on_answer(answers_div, info, qa, on_success, on_wrong, batch_get);
}
