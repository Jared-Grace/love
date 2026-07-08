import { list_pair_other } from "../../../love/public/src/list_pair_other.mjs";
export function app_code_lesson_quiz_qa_property_other(answer_property) {
  let properties = ["question", "answer"];
  let question_property = list_pair_other(properties, answer_property);
  return question_property;
}
