import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { app_code_lesson_expression_parentheses_same_strength_divide_line } from "./app_code_lesson_expression_parentheses_same_strength_divide_line.mjs";
import { app_code_lesson_expression_parentheses_same_strength_subtract_line } from "./app_code_lesson_expression_parentheses_same_strength_subtract_line.mjs";
import { app_code_lesson_expression_parentheses_same_strength_title_name_id } from "./app_code_lesson_expression_parentheses_same_strength_title_name_id.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_parentheses_flat_decoys } from "./app_code_parentheses_flat_decoys.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_parentheses_same_strength() {
  "the second parentheses lesson, and the one that answers a question the first leaves open. The first showed brackets beating a STRONGER operator: (1 + 2) * 3 is 9 where 1 + 2 * 3 is 7. A learner can come away believing brackets only matter when the operators differ in strength - that they are a way of saying do the weak one first. This lesson shows them changing an answer where both operators are the SAME strength: 12 - (3 + 4) is 5 where 12 - 3 + 4 is 13, and 12 / (2 * 3) is 2 where 12 / 2 * 3 is 18. What the brackets override here is not strength but the left-to-right order the same-strength lessons taught.";
  "The group is always on the RIGHT of the - or the /, because that is the only side where it changes anything: (a + b) - c and a + b - c are the same line. That the position matters here, when the first lesson showed the group happily on either side of a *, is the point rather than an accident - and it is why the title names the OUTER operator.";
  "Every line is built so the answer, the group, and the wrong answer are all whole and never below zero: the subtraction shapes take a = b + c + k, and the division shape takes a = b * c * k.";
  let name_id =
    app_code_lesson_expression_parentheses_same_strength_title_name_id();
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
    "four at a time, alternating a - line and a / line. The examples screen draws two, so every screen shows one of each - the two outer operators this lesson is about";
    let v =
      app_code_lesson_expression_parentheses_same_strength_subtract_line();
    let v2 = app_code_lesson_expression_parentheses_same_strength_divide_line();
    let v3 =
      app_code_lesson_expression_parentheses_same_strength_subtract_line();
    let v4 = app_code_lesson_expression_parentheses_same_strength_divide_line();
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "the left-to-right rule they already have, then brackets overriding it after a -, then the same thing after a /, then the rule in one line";
    "The closing card says the inside-before-outside sentence WORD-IDENTICALLY, from the one function every parentheses lesson shares. It once said the thing only this lesson can say - that the brackets beat working left to right - on the grounds that a restatement is only worth a card when it comes from somewhere new. That angle was withdrawn because it was not true: before working left to right is a claim about EVERY operator, and ** runs right to left, so the card taught a rule that would later have to be unlearned. Inside-before-outside holds whichever way an operator runs. The near-copy worry it was avoiding does not apply to a sentence repeated exactly - that is the case a learner recognises and passes over in a second, which is what a recall should cost.";
    "Nothing here says strength or stronger. That word is ours, not the learner's - it appears in these docstrings and nowhere on a screen. What the plus-minus lesson actually told them is whichever one comes first, we do first, and what the precedence lessons told them is we always do * before +, even if * appears later. A card that leans on strength would be leaning on a word never defined.";
    let plus = js_operator_plus_symbol();
    let minus = js_operator_minus_symbol();
    let divided = js_operator_division_symbol();
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, [
      "Remember: ",
      plus,
      " and ",
      minus,
      " are solved left to right",
    ]);
    html_div_cycle_code(recall, ["So ", "12 - 3 + 4", " is ", "13"]);
    let changed = app_code_container_light_blue(root);
    html_div_cycle_code(changed, [
      "But ",
      "12 - (3 + 4)",
      " does the ",
      "3 + 4",
      " first",
    ]);
    html_div_cycle_code(changed, [
      "",
      "3 + 4",
      " is ",
      "7",
      ", so we have ",
      "12 - 7",
    ]);
    html_div_cycle_code(changed, ["So ", "12 - (3 + 4)", " is ", "5"]);
    let after_divide = app_code_container_light_blue(root);
    html_div_cycle_code(after_divide, ["Likewise for ", divided, " :"]);
    html_div_cycle_code(after_divide, ["", "12 / 2 * 3", " is ", "18"]);
    html_div_cycle_code(after_divide, [
      "But ",
      "12 / (2 * 3)",
      " does the ",
      "2 * 3",
      " first",
    ]);
    html_div_cycle_code(after_divide, [
      "",
      "2 * 3",
      " is ",
      "6",
      ", so we have ",
      "12 / 6",
    ]);
    html_div_cycle_code(after_divide, ["So ", "12 / (2 * 3)", " is ", "2"]);
    let rule = app_code_container_light_blue(root);
    let r = app_code_parentheses_inside_before_outside("");
    html_div_cycle_code(rule, ["Whatever is inside ", open, " and ", close, r]);
  }
}
