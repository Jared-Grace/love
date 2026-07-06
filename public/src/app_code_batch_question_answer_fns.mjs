import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function app_code_batch_question_answer_fns(
  batch_questions_get,
  question_to_answer,
) {
  let r = function lambda() {
    let questions = batch_questions_get();
    let mapped = list_map_property(list, property_name);
  };
  return r;
}
