import { app_code_lesson_operators_dot_batch } from "./app_code_lesson_operators_dot_batch.mjs";
import { digits_positive_shuffled_next } from "./digits_positive_shuffled_next.mjs";
export function app_code_lesson_operators_dot_batch_numbers(operator) {
  let next = digits_positive_shuffled_next();
  let b = app_code_lesson_operators_dot_batch(operator, next);
  return b;
}
