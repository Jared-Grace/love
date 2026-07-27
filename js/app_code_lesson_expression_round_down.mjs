import { app_code_lesson_expression_round_generic } from "./app_code_lesson_expression_round_generic.mjs";
export function app_code_lesson_expression_round_down() {
  "practice Math.floor on a decimal number by itself, before it is used on a division: Math.floor rounds a number DOWN to the whole number below it (Math.floor(3.5) is 3, and Math.floor(3.9) is also 3 - always down, never up); the answer is that whole number. This is the lesson that first introduces the term whole number, and its extreme example uses a HIGH decimal (7..9) to show it still rounds down, not to the nearest.";
  let lesson = app_code_lesson_expression_round_generic({
    fn_name: "Math.floor",
    rounds_up: false,
    ordinary_digits: [1, 4],
    extreme_digits: [7, 9],
    introduce_whole_number: true,
  });
  return lesson;
}
