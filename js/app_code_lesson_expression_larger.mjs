import { app_code_lesson_expression_min_max_generic } from "./app_code_lesson_expression_min_max_generic.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_larger() {
  "practice Math.max, the partner of Math.min and the other two-number function: Math.max(a, b) gives the larger of the two, written with the numbers separated by a comma (Math.max(3, 8) is 8); the answer is the larger number. Self-contained - the two-number idea is already introduced by Math.min - so its opening line names Math.max directly.";
  function define_render(root) {
    "self-contained opening line naming Math.max directly (the two-number idea was introduced by the Math.min lesson), the comma shown as code";
    let define = app_code_container_light_blue(root);
    html_div_cycle_code(define, [
      "",
      "Math.max",
      " receives two numbers, separated by a comma ",
      ",",
    ]);
  }
  let lesson = app_code_lesson_expression_min_max_generic({
    fn_name: "Math.max",
    choose: math_max,
    decoy_choose: math_min,
    noun: "larger",
    noun_upper: "Larger",
    comparison: "bigger than",
    short_name: "max",
    define_render,
  });
  return lesson;
}
