import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_dot_rectangle } from "./app_code_dot_rectangle.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lesson_swapping_generic } from "./app_code_lesson_swapping_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_swapping_add() {
  "the first swapping lesson: put the SAME two numbers on each side of ===, swapped around the operator - a op b === b op a. Leads with + (the earliest arithmetic anyone learns), then *, both of which keep their value when swapped, each with an everyday reason so the rule is understood, not memorised; then - as the contrast that changes when swapped. Each case shows both sides worked out so the swap is visible, not left implied. The quiz mixes + * (true) with - (false). Answer is the code's own true/false value, correct by construction.";
  let name_id = title_name_id();
  let lesson = app_code_lesson_swapping_generic({
    name_id,
    above,
    true_ops: ["+", "*"],
    false_ops: ["-"],
    wrap: false,
  });
  return lesson;
  function title_name_id() {
    "the home title: swapping + and *, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_cycle_code(parent, ["swapping ", "+", " and ", "*"]);
      }
      return render;
    }
    let rights = ["swapping plus times"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function above(root) {
    "define swap once, then show it for +, * and -: + and * keep the value when swapped (each with an everyday reason), - changes it. Every case shows both sides worked out so the swap is seen, not implied";
    let setup = app_code_container_light_blue(root);
    html_div_cycle_code(setup, ["Suppose we have ", "3 + 4"]);
    html_div_cycle_code(setup, [
      "Then we can swap the ",
      "3",
      " and the ",
      "4",
    ]);
    html_div_cycle_code(setup, ["Now we have ", "4 + 3"]);
    let plus = app_code_container_light_blue(root);
    html_div_cycle_code(plus, [
      "Adding puts two amounts together, so the order does not matter",
    ]);
    html_div_cycle_code(plus, [
      "",
      "3 + 4 === 7",
      " and swapped: ",
      "4 + 3 === 7",
    ]);
    html_div_cycle_code(plus, [
      "",
      "7",
      " and ",
      "7",
      " are the same, so we can always swap the numbers around ",
      "+",
    ]);
    let times = app_code_container_light_blue(root);
    html_div_cycle_code(times, [
      "We can represent ",
      "3 * 4",
      " like this: 3 rows of 4 dots",
    ]);
    app_code_dot_rectangle(times, 3, 4, false);
    html_div_cycle_code(times, ["3 rows of 4 and 4 rows of 3 are the same"]);
    app_code_dot_rectangle(times, 3, 4, true);
    html_div_cycle_code(times, [
      "The dots stay the same, so the total count stays the same",
    ]);
    html_div_cycle_code(times, [
      "It is the same for all other numbers, not just 3 and 4",
    ]);
    html_div_cycle_code(times, ["So we can swap the 3 and 4"]);
    html_div_cycle_code(times, [
      "And we can always swap the numbers around ",
      "*",
    ]);
    let minus = app_code_container_light_blue(root);
    html_div_cycle_code(minus, [
      "Subtracting takes one number away from the other",
    ]);
    html_div_cycle_code(minus, [
      "",
      "5 - 4 === 1",
      " but swapped: ",
      "4 - 5 === -1",
    ]);
    html_div_cycle_code(minus, [
      "",
      "1",
      " and ",
      "-1",
      " are different, so we can never swap two different numbers around ",
      "-",
    ]);
    html_div_cycle_code(minus, [
      "However, we can always swap two numbers that are the same, because the same numbers are on either side before and after",
    ]);
  }
}
