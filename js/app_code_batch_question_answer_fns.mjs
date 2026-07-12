import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_batch_question_answer_fns(
  batch_questions_get,
  question_to_answer,
) {
  arguments_assert(arguments, 2);
  let b = function lambda() {
    let questions = batch_questions_get();
    function lambda2(question) {
      let answer = question_to_answer(question);
      let qa = {
        question,
        answer,
      };
      return qa;
    }
    let mapped = list_map(questions, lambda2);
    return mapped;
  };
  return b;
}
