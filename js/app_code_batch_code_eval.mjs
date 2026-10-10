import { eval_expression_confined } from "./eval_expression_confined.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
export function app_code_batch_code_eval(batch_get) {
  let b = app_code_batch_question_answer_fns(
    batch_get,
    eval_expression_confined,
  );
  return b;
}
