import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lesson_swapping_generic } from "./app_code_lesson_swapping_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_swapping_divide() {
  "the second swapping lesson: the arithmetic operators that do NOT swap - / (divide), % (remainder) and ** (power). Each gets an everyday reason it is directional, so the rule is understood, not memorised, and both sides are worked out so the swap is seen. + and * are recalled as the ones that do swap, so the quiz mixes them (true) with / % ** (false). Answer is the code's own true/false value, correct by construction.";
  let name_id = title_name_id();
  let lesson = app_code_lesson_swapping_generic({
    name_id,
    above,
    true_ops: ["+", "*"],
    false_ops: ["/", "%", "**"],
    wrap: false,
  });
  return lesson;
  function title_name_id() {
    "the home title: swapping / % **, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_cycle_code(parent, ["swapping ", "/", " ", "%", " ", "**"]);
      }
      return render;
    }
    let rights = ["swapping divide power"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function above(root) {
    "recall + * swap, then show /, % and ** each changing when swapped, with an everyday reason and both sides worked out";
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, [
      "Remember: ",
      "+",
      " and ",
      "*",
      " keep the same value when swapped",
    ]);
    html_div_cycle_code(recall, [
      "",
      "3 + 4 === 7",
      " and swapped: ",
      "4 + 3 === 7",
    ]);
    let division = app_code_container_light_blue(root);
    html_div_cycle_code(division, [
      "Dividing (",
      "/",
      ") groups a number into equally sized parts",
    ]);
    html_div_cycle_code(division, [
      "",
      "1 / 2 === 0.5",
      " but swapped: ",
      "2 / 1 === 2",
    ]);
    html_div_cycle_code(division, [
      "",
      "0.5",
      " and ",
      "2",
      " are different, so we can never swap two different numbers around ",
      "/",
    ]);
    html_div_cycle_code(division, [
      "However, we can always swap two numbers that are the same, because both numbers are the same before and after",
    ]);
    let leftover = app_code_container_light_blue(root);
    html_div_cycle_code(leftover, [
      "The remainder (",
      "%",
      ") is what is left after dividing",
    ]);
    html_div_cycle_code(leftover, [
      "",
      "7 % 3 === 1",
      " but swapped: ",
      "3 % 7 === 3",
    ]);
    html_div_cycle_code(leftover, [
      "",
      "1",
      " and ",
      "3",
      " are different, so we can never swap two different numbers around ",
      "%",
    ]);
    let power = app_code_container_light_blue(root);
    html_div_cycle_code(power, [
      "A power (",
      "**",
      ") multiplies a number by itself",
    ]);
    html_div_cycle_code(power, ["", "2 ** 3", " is ", "2 * 2 * 2 === 8"]);
    html_div_cycle_code(power, ["", "3 ** 2", " is ", "3 * 3 === 9"]);
    html_div_cycle_code(power, [
      "",
      "8",
      " and ",
      "9",
      " are different, so we cannot always swap the numbers around ",
      "**",
    ]);
  }
}
