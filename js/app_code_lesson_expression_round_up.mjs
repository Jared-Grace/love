import { app_code_lesson_expression_round_generic } from "./app_code_lesson_expression_round_generic.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_up() {
  "practice Math.ceil on a decimal number by itself, the sibling of Math.floor: Math.ceil rounds a number UP to the whole number above it (Math.ceil(3.2) is 4, and Math.ceil(3.1) is also 4 - always up, never down), and it leaves an already-whole number unchanged (Math.ceil(3) is 3); the answer is that whole number. The term whole number was already introduced at Round down, so it is not re-bolded here, and its extreme example uses a LOW decimal (1..3) to show it still rounds up, not to the nearest.";
  function metaphor_render(box) {
    "the ceiling metaphor, why the function is named this - kept inclusive: the building is stated as a CONDITION, not assumed as the default (sibling of the floor lesson's framing)";
    html_div_cycle_code(box, [
      "If you are inside a building, the ceiling is above you",
    ]);
    html_div_cycle_code(box, [
      "",
      "Math.ceil",
      " brings a number up to the ceiling, so it is a whole number and not a floating decimal",
    ]);
  }
  function trap_render(box) {
    "name the common trap head-on: ceil is NOT round-to-the-nearest (the same misconception as floor, the other direction)";
    html_div_cycle_code(box, [
      "",
      "Math.ceil",
      " does not round to the nearest",
    ]);
    html_div_cycle_code(box, [
      "",
      "Math.ceil(4.2)",
      " is ",
      "5",
      ", not ",
      "4",
    ]);
  }
  let lesson = app_code_lesson_expression_round_generic({
    fn_name: "Math.ceil",
    rounds_up: true,
    ordinary_digits: [5, 9],
    extreme_digits: [1, 3],
    introduce_whole_number: false,
    metaphor_render,
    trap_render,
  });
  return lesson;
}
