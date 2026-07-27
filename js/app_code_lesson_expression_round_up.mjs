import { app_code_lesson_expression_round_generic } from "./app_code_lesson_expression_round_generic.mjs";
export function app_code_lesson_expression_round_up() {
  "practice Math.ceil on a decimal number by itself, the sibling of Math.floor: Math.ceil rounds a number UP to the whole number above it (Math.ceil(3.2) is 4, and Math.ceil(3.1) is also 4 - always up, never down), and it leaves an already-whole number unchanged (Math.ceil(3) is 3); the answer is that whole number. The term whole number was already introduced at Round down, so it is not re-bolded here, and its extreme example uses a LOW decimal (1..3) to show it still rounds up, not to the nearest.";
  let lesson = app_code_lesson_expression_round_generic({
    fn_name: "Math.ceil",
    rounds_up: true,
    ordinary_digits: [5, 9],
    extreme_digits: [1, 3],
    introduce_whole_number: false,
  });
  return lesson;
}
