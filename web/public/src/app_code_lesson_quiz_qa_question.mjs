import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_lesson_quiz_qa_property_other } from "../../../love/public/src/app_code_lesson_quiz_qa_property_other.mjs";
export function app_code_lesson_quiz_qa_question(answer_property, qa) {
  let question_property =
    app_code_lesson_quiz_qa_property_other(answer_property);
  let quiz_question = property_get(qa, question_property);
  return quiz_question;
}
