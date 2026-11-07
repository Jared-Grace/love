import { object_copy_assign } from "./object_copy_assign.mjs";
export function app_learn_js_lesson_symbol_set(lesson, symbol) {
  let r = object_copy_assign(lesson, {
    symbol,
  });
  return r;
}
