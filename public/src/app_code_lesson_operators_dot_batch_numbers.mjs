import { app_code_lesson_operators_dot_batch } from "../../../love/public/src/app_code_lesson_operators_dot_batch.mjs";
import { lambda_value } from "../../../love/public/src/lambda_value.mjs";
import { digits_positive_shuffled_next } from "../../../love/public/src/digits_positive_shuffled_next.mjs";
export function app_code_lesson_operators_dot_batch_numbers(operator) {
  let next_get = digits_positive_shuffled_next();
  let next = lambda_value("");
  let b = app_code_lesson_operators_dot_batch(operator, next);
  return b;
}
