import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_tokenizer } from "../../../love/public/src/js_tokenizer.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_quiz_token_select(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_property = property_get(info, "answer_property");
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let quiz_answer = property_get(qa, answer_property);
  let tokens = js_tokenizer(quiz_answer);
  let mapped = list_map_property(tokens, "value");
  function lambda(item) {}
  let mapped2 = list_map(list, lambda);
  log(app_code_lesson_quiz_token_select.name, {
    mapped,
  });
}
