import { integer_random_1 } from "./integer_random_1.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
export function app_code_lesson_operators_value_max_random_next() {
  let m = app_code_lesson_operators_value_max();
  function next() {
    let r = integer_random_1(m);
    return r;
  }
  return next;
}
