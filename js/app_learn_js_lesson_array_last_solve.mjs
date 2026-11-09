import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_lesson_expression_choose_order_twin_array_generic } from "./app_learn_js_lesson_expression_choose_order_twin_array_generic.mjs";
import { app_learn_js_lesson_array_last } from "./app_learn_js_lesson_array_last.mjs";
export function app_learn_js_lesson_array_last_solve() {
  arguments_assert(arguments, 0);
  ('the last item of an array taken a press at a time before the lesson next door asks for it whole: let a = ["love", "joy", "peace"]; console.log(a[a.length - 1]); press a.length, choose 3, press the minus, choose 2, press a, choose peace');
  ("Asked for by the human 2026-11-09: the array lessons step like a line of arithmetic, with a.length and the brackets pieces of their own to press and a kept written as a name.");
  let lesson = app_learn_js_lesson_expression_choose_order_twin_array_generic(
    "Solve the last item",
    "a[a.length - 1]",
    app_learn_js_lesson_array_last,
  );
  return lesson;
}
