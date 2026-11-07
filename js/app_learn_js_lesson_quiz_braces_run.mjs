import { property_get } from "./property_get.mjs";
import { app_learn_js_braces_run_choose } from "./app_learn_js_braces_run_choose.mjs";
export function app_learn_js_lesson_quiz_braces_run(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "the does-this-section-run quiz: the same answering as the worked example";
  "Its own named function, so a milestone can ask whether a quiz is this one by comparing the function itself. Its name read at run time would not do: a built page may shorten it.";
  let question = property_get(qa, "question");
  let answer = property_get(qa, "answer");
  correction_code_set(answer);
  app_learn_js_braces_run_choose(parent, question, on_wrong, on_success);
}
