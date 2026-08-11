import { app_code_parentheses_flat_decoys } from "./app_code_parentheses_flat_decoys.mjs";
import { app_code_lesson_expression_parentheses_arithmetic_expression } from "./app_code_lesson_expression_parentheses_arithmetic_expression.mjs";
import { app_code_lesson_expression_parentheses_arithmetic_title_name_id } from "./app_code_lesson_expression_parentheses_arithmetic_title_name_id.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_parentheses_arithmetic() {
  "the FIRST parentheses a learner ever meets, and they are met where they change the answer: (1 + 2) * 3 is 9 where 1 + 2 * 3 is 7. Everything else here is already known - the numbers, the operators, and the precedence rule itself, which the plus-times lesson taught as we always do the * first, even when it comes later in the line. So exactly one thing is new: a pair of symbols that overrides that rule. The parenthesised group is shown on BOTH sides of the *, the same way the plus-times lesson showed the same multiplication in both positions, so what is learned is the brackets rather than a position.";
  "The tailored wrong answer is the value of the very same line with the parentheses taken away, which is the whole mistake this lesson exists to prevent: a learner who does not yet believe the brackets matter will read (1 + 2) * 3 as 1 + 2 * 3 and answer 7. Offering that number is what makes choosing 9 an act of reading the brackets rather than of arithmetic.";
  "It comes before the comparison-parentheses lessons on purpose. Those wrap a comparison in brackets that change no answer at all - safe only once brackets are already believed in, and meaningless as a first meeting.";
  let name_id =
    app_code_lesson_expression_parentheses_arithmetic_title_name_id();
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_parentheses_flat_decoys,
  });
  return lesson;
  function refill() {
    "four at a time, alternating the group on the left and on the right. The examples screen draws two, so every screen shows the group once on each side - which is the whole of what there is to show, and why the count is 2 rather than the 4 the true-false lessons use";
    let v = app_code_lesson_expression_parentheses_arithmetic_expression(true);
    let v2 =
      app_code_lesson_expression_parentheses_arithmetic_expression(false);
    let v3 = app_code_lesson_expression_parentheses_arithmetic_expression(true);
    let v4 =
      app_code_lesson_expression_parentheses_arithmetic_expression(false);
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "the rule they already have, then the brackets overriding it, then the same group on the other side of the *, then the rule in one line";
    let plus = js_operator_plus_symbol();
    let times = js_operator_asterisk_symbol();
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, [
      "Remember: ",
      "1 + 2 * 3",
      " does the ",
      times,
      " first",
    ]);
    html_div_cycle_code(recall, ["So ", "1 + 2 * 3", " is ", "7"]);
    html_div_cycle_code(recall, [
      "But what if we want to do the ",
      plus,
      " first?",
    ]);
    let tool = app_code_container_light_blue(root);
    html_div_cycle_code(tool, [
      "We can put ",
      open,
      " and ",
      close,
      " around the ",
      "1 + 2",
    ]);
    html_div_cycle_code(tool, [
      "",
      "(1 + 2) * 3",
      " does the ",
      "1 + 2",
      " first",
    ]);
    html_div_cycle_code(tool, [
      "",
      "1 + 2",
      " is ",
      "3",
      ", so we have ",
      "3 * 3",
    ]);
    html_div_cycle_code(tool, ["So ", "(1 + 2) * 3", " is ", "9"]);
    let either = app_code_container_light_blue(root);
    html_div_cycle_code(either, [
      "The ",
      open,
      " and ",
      close,
      " can be on either side of the ",
      times,
    ]);
    html_div_cycle_code(either, [
      "",
      "4 * (2 + 3)",
      " does the ",
      "2 + 3",
      " first",
    ]);
    html_div_cycle_code(either, [
      "",
      "2 + 3",
      " is ",
      "5",
      ", so we have ",
      "4 * 5",
    ]);
    html_div_cycle_code(either, ["So ", "4 * (2 + 3)", " is ", "20"]);
    let rule = app_code_container_light_blue(root);
    html_div_cycle_code(rule, [
      "Whatever is inside ",
      open,
      " and ",
      close,
      app_code_parentheses_inside_before_outside(""),
    ]);
  }
}
