import { app_code_symbols_eval_valid_identifier } from "../../../love/public/src/app_code_symbols_eval_valid_identifier.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
export function app_code_batch_question_answer_fns_validity(batch_get) {
  let b = app_code_batch_question_answer_fns(
    batch_get,
    app_code_symbols_eval_valid_identifier,
  );
  return b;
}
