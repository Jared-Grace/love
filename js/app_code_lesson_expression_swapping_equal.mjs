import { app_code_lesson_swapping_generic } from "./app_code_lesson_swapping_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_swapping_equal() {
  "the fourth swapping lesson: === and !== DO swap, because asking are-they-the-same (or are-they-different) reads the same either way. Both sides are already comparisons, so each is wrapped in ( ) - (a === b) === (b === a) - since a === b === b === a would otherwise chain left to right. The ordering comparisons < > <= >= are recalled as the ones that flip, so the quiz mixes === !== (true) with < > <= >= (false), all wrapped. Answer is the code's own true/false value, correct by construction.";
  let name_id = title_name_id();
  let lesson = app_code_lesson_swapping_generic({
    name_id,
    above,
    true_ops: ["===", "!=="],
    false_ops: ["<", ">", "<=", ">="],
    wrap: true,
  });
  return lesson;
  function title_name_id() {
    "the home title: swapping === and !==, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_cycle_code(parent, ["swapping ", "===", " and ", "!=="]);
      }
      return render;
    }
    let rights = ["swapping equal"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "show that === and !== swap (asking either way gives the same answer), that < > <= >= still flip, and that when both sides are comparisons each is wrapped in ( )";
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, [
      "",
      "===",
      " asks: are the two numbers the same?",
    ]);
    html_div_cycle_code(intro, ["", "!==", " asks: are they different?"]);
    let same = app_code_container_light_blue(root);
    html_div_cycle_code(same, [
      "Asking either way gives the same answer, so these can swap",
    ]);
    html_div_cycle_code(same, [
      "",
      "3 === 5",
      " is ",
      "false",
      ", and ",
      "5 === 3",
      " is ",
      "false",
    ]);
    let order_recall = app_code_container_light_blue(root);
    html_div_cycle_code(order_recall, [
      "But ",
      "<",
      ", ",
      ">",
      ", ",
      "<=",
      " and ",
      ">=",
      " still cannot swap",
    ]);
    let paren = app_code_container_light_blue(root);
    html_div_cycle_code(paren, [
      "When both sides are comparisons, we wrap each one in ( )",
    ]);
    html_div_cycle_code(paren, ["", "(3 === 5) === (5 === 3)", " is ", "true"]);
  }
}
