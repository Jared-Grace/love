import { list_map } from "../../../love/public/src/list_map.mjs";
export function app_code_batch_question_answer_fns(
  batch_questions_get,
  question_to_answer,
) {
  let r = function lambda() {
    let questions = batch_questions_get();
    function lambda2(question) {
      let answer = question_to_answer(question);
      let r2 = {
        question,
      };
      return r2;
    }
    let mapped = list_map(questions, lambda2);
    return mapped;
  };
  return r;
}
