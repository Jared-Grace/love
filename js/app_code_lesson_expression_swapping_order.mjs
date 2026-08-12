import { app_code_lesson_swapping_same_numbers_line } from "./app_code_lesson_swapping_same_numbers_line.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lesson_swapping_generic } from "./app_code_lesson_swapping_generic.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_swapping_order() {
  "the third swapping lesson: the ordering comparisons < > <= >=, which FLIP when swapped. The reason is understood, not memorised: if 2 < 3 is true then 3 < 2 is false, because swapping would say the bigger number is now the smaller one. + and * are recalled as the ones that can swap, so the quiz mixes them (true) with < > <= >= (false). Answer is the code's own true/false value, correct by construction.";
  let name_id = title_name_id();
  let lesson = app_code_lesson_swapping_generic({
    name_id,
    above,
    true_ops: ["+", "*"],
    false_ops: ["<", ">", "<=", ">="],
    wrap: false,
  });
  return lesson;
  function title_name_id() {
    "the home title: swapping < > <= >=, an Expressions lesson";
    function paint(parent) {
      html_cycle_code(parent, [
        "swapping ",
        "<",
        " ",
        ">",
        " ",
        "<=",
        " ",
        ">=",
      ]);
    }
    let rights = ["swapping order"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_category_then(rights, left, paint);
    return built;
  }
  function above(root) {
    "show that ordering comparisons flip when swapped, with the reason: if 2 < 3 is true then 3 < 2 is false, because the bigger number would now be the smaller one. + and * are recalled as the swappers";
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, [
      "Remember: ",
      "<",
      " and ",
      ">",
      " ask which number is smaller or bigger",
    ]);
    let less = app_code_container_light_blue(root);
    html_div_cycle_code(less, [
      "",
      "2 < 3",
      " is ",
      "true",
      ", but swapped: ",
      "3 < 2",
      " is ",
      "false",
    ]);
    html_div_cycle_code(less, [
      "Swapping ",
      "<",
      " would say the bigger number is now the smaller number",
    ]);
    html_div_cycle_code(less, ["And likewise for ", ">"]);
    html_div_cycle_code(less, [
      "So we can never swap two different numbers around ",
      "<",
      " or ",
      ">",
    ]);
    app_code_lesson_swapping_same_numbers_line(less);
    let or_equal = app_code_container_light_blue(root);
    html_div_cycle_code(or_equal, [
      "",
      "3 <= 5",
      " is ",
      "true",
      ", but swapped: ",
      "5 <= 3",
      " is ",
      "false",
    ]);
    html_div_cycle_code(or_equal, [
      "So we can never swap two different numbers around ",
      "<=",
      " or ",
      ">=",
    ]);
    let swappers = app_code_container_light_blue(root);
    html_div_cycle_code(swappers, [
      "So far, only ",
      "+",
      " and ",
      "*",
      " keep the same value when swapped",
    ]);
    html_div_cycle_code(swappers, [
      "But ",
      "-",
      " , ",
      "/",
      " , ",
      "%",
      " , ",
      "**",
      " , ",
      "<",
      " , ",
      ">",
      " , ",
      "<=",
      " and ",
      ">=",
      " do not always keep the same value when swapped",
    ]);
  }
}
