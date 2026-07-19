import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_round_down() {
  "practice Math.floor on a decimal number by itself, before it is used on a division: Math.floor rounds a number DOWN to the whole number below it (Math.floor(3.5) is 3, and Math.floor(3.9) is also 3 - always down, never up); the answer is that whole number; whole part 2..7, one decimal digit 1..9 so there is always a real decimal to round off";
  function make(whole) {
    "Math.floor of a decimal built as whole.digit (e.g. 3.5), so the answer is always the whole part and there is always a fraction to drop";
    let digit = integer_random(1, 9);
    let decimal = text_combine_multiple([text_to(whole), ".", text_to(digit)]);
    let code = text_combine_multiple(["Math.floor(", decimal, ")"]);
    return code;
  }
  function refill() {
    "four questions, each with a DIFFERENT whole part so two never look alike";
    let wholes = list_shuffle_take([2, 3, 4, 5, 6, 7], 4);
    let list = list_map(wholes, make);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log round down";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Round down");
      }
      return render;
    }
    let rights = ["round down"];
    let built = app_code_lesson_name_id_generic(rights, "functions", title_get);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "Math.floor takes a number and rounds it down to the whole number below it",
    ]);
    html_div_cycle_code(c, ["", "Math.floor(3.5)", " is ", "3"]);
    html_div_cycle_code(c, ["It always rounds down, never up"]);
    html_div_cycle_code(c, [
      "",
      "Math.floor(3.9)",
      " is also ",
      "3",
      " not ",
      "4",
    ]);
    html_div_cycle_code(c, ["A number that is already whole does not change"]);
    html_div_cycle_code(c, ["", "Math.floor(6)", " is ", "6"]);
  }
}
