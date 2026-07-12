import { app_code_lesson_operators_dot_batch } from "./app_code_lesson_operators_dot_batch.mjs";
import { lambda_value } from "./lambda_value.mjs";
export function app_code_lesson_operators_dot_batch_missing(operator) {
  let next = lambda_value("");
  let b = app_code_lesson_operators_dot_batch(operator, next);
  return b;
}
