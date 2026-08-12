import { app_code_lesson_swapping_same_numbers_line } from "./app_code_lesson_swapping_same_numbers_line.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lesson_swapping_generic } from "./app_code_lesson_swapping_generic.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
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
    function paint(parent) {
      html_cycle_code(parent, ["swapping ", "===", " and ", "!=="]);
    }
    let rights = ["swapping equal"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_category_then(rights, left, paint);
    return built;
  }
  function above(root) {
    "show that === and !== swap (asking either way gives the same answer), that < > <= >= still flip, and that when both sides are comparisons each is wrapped in ( and ). the wrapping is taught in two steps: first one wrapped comparison against a plain false - (3 === 5) === false - which is the single new idea that a comparison stands where a true/false stood; only then both sides wrapped";
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, ["Remember:"]);
    html_div_cycle_code(intro, [
      "",
      "===",
      " asks: are the two numbers the same?",
    ]);
    html_div_cycle_code(intro, [
      "",
      "!==",
      " asks: are the two numbers different?",
    ]);
    let same = app_code_container_light_blue(root);
    ("One line became four, each a single step, because the original packed the supposition, the swap, the reason and the conclusion into one sentence joined by a dash - and it opened on the conclusion (doesn't matter) before the reader had been given the thing it was a conclusion about.");
    html_div_cycle_code(same, [
      "Suppose we ask if two numbers are the same (",
      "===",
      ")",
    ]);
    html_div_cycle_code(same, ["Suppose we swap the two numbers"]);
    html_div_cycle_code(same, [
      "Then we are still asking if those two numbers are the same",
    ]);
    html_div_cycle_code(same, ["So the answer will be the same"]);
    ("the line before this one already opens on So. Two conclusions in a row both announcing themselves as the conclusion read as one thought stuttering, and the second one is the further step - it says what the sameness of the answer buys us");
    html_div_cycle_code(same, ["This means we can always swap ", "==="]);
    ("Each operator's example sits directly under its own rule. One example, placed after both rules, is read as belonging to the rule it touches - so the === example stranded under the !== sentence left === claimed four lines earlier with nothing beside it, and !== claimed with an example that was not of it.");
    html_div_cycle_code(same, [
      "For example: ",
      "3 === 5",
      " is ",
      "false",
      ", and swapped: ",
      "5 === 3",
      " is ",
      "false",
    ]);
    html_div_cycle_code(same, [
      "Likewise, for asking if two numbers are different (",
      "!==",
      "), we can always swap ",
      "!==",
      " as well",
    ]);
    html_div_cycle_code(same, [
      "For example: ",
      "3 !== 5",
      " is ",
      "true",
      ", and swapped: ",
      "5 !== 3",
      " is ",
      "true",
    ]);
    let order_recall = app_code_container_light_blue(root);
    html_div_cycle_code(order_recall, [
      "But we can never swap two different numbers around ",
      "<",
      ", ",
      ">",
      ", ",
      "<=",
      " and ",
      ">=",
    ]);
    app_code_lesson_swapping_same_numbers_line(order_recall);
    let paren = app_code_container_light_blue(root);
    html_div_cycle_code(paren, [
      "Remember: when both sides are comparisons, we wrap each side in ",
      "(",
      " and ",
      ")",
    ]);
    html_div_cycle_code(paren, ["", "(3 === 5) === (5 === 3)", " is ", "true"]);
  }
}
