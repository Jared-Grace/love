import { app_code_lesson_expression_round_generic } from "./app_code_lesson_expression_round_generic.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_down() {
  "practice Math.floor on a decimal number by itself, before it is used on a division: Math.floor rounds a number DOWN to the whole number below it (Math.floor(3.5) is 3, and Math.floor(3.9) is also 3 - always down, never up); the answer is that whole number. This is the lesson that first introduces the term whole number, and its extreme example uses a HIGH decimal (7..9) to show it still rounds down, not to the nearest.";
  function metaphor_render(box) {
    "the floor metaphor, why the function is named this - kept inclusive: not everyone has a floor (some walk on dirt), so the building is stated as a CONDITION, not assumed as the default";
    html_div_cycle_code(box, [
      "If you are inside a building, the floor is underneath you",
    ]);
    html_div_cycle_code(box, [
      "",
      "Math.floor",
      " brings a number down onto the floor, so it is a whole number and not a floating decimal",
    ]);
  }
  function trap_render(box) {
    "name the common trap head-on: floor is NOT round-to-the-nearest, the mistake a real learner made (4.8 puzzled them by becoming 4)";
    html_div_cycle_code(box, [
      "",
      "Math.floor",
      " does not round to the nearest",
    ]);
    html_div_cycle_code(box, [
      "",
      "Math.floor(4.8)",
      " is ",
      "4",
      ", not ",
      "5",
    ]);
  }
  let lesson = app_code_lesson_expression_round_generic({
    fn_name: "Math.floor",
    rounds_up: false,
    ordinary_digits: [1, 4],
    extreme_digits: [7, 9],
    introduce_whole_number: true,
    metaphor_render,
    trap_render,
  });
  return lesson;
}
