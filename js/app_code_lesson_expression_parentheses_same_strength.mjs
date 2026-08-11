import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_parentheses_same_strength_title_name_id } from "./app_code_lesson_expression_parentheses_same_strength_title_name_id.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_parentheses_flat_decoys } from "./app_code_parentheses_flat_decoys.mjs";
import { add } from "./add.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { multiply } from "./multiply.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
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
    example_count: 4,
    decoys: app_code_parentheses_flat_decoys,
  });
  return lesson;
  function subtract_line() {
    "a - (b + c) or a - (b - c). For the minus form b is 5..9 and c is 2..4 so the group is never negative, and a is b + c + k so both the answer and the bracket-less wrong answer stay above zero";
    let inner_plus = list_random_item([true, false]);
    let on_true = integer_random(2, 5);
    let on_false = integer_random(5, 9);
    let b = ternary(inner_plus, on_true, on_false);
    let on_true2 = integer_random(2, 5);
    let on_false2 = integer_random(2, 4);
    let c = ternary(inner_plus, on_true2, on_false2);
    let k = integer_random(1, 8);
    let left = add(b, c);
    let a = add(left, k);
    let plus = js_operator_plus_symbol();
    let minus = js_operator_minus_symbol();
    let inner_symbol = ternary(inner_plus, plus, minus);
    let code = app_code_lesson_expression_parentheses_same_strength_line(
      a,
      minus,
      b,
      inner_symbol,
      c,
    );
    return code;
  }
  function divide_line() {
    "a / (b * c), with a built as b * c * k so the answer is the whole number k and the bracket-less value a / b * c is whole too";
    let b = integer_random(2, 4);
    let c = integer_random(2, 3);
    let k = integer_random(2, 4);
    let left2 = multiply(b, c);
    let a = multiply(left2, k);
    let divided = js_operator_division_symbol();
    let times = js_operator_asterisk_symbol();
    let code = app_code_lesson_expression_parentheses_same_strength_line(
      a,
      divided,
      b,
      times,
      c,
    );
    return code;
  }
  function refill() {
    "four examples a screen, two after a - and two after a /";
    let v = subtract_line();
    let v2 = divide_line();
    let v3 = subtract_line();
    let v4 = divide_line();
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "the left-to-right rule they already have, then brackets overriding it after a -, then the same thing after a /, then the rule in one line";
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
      " are the same strength, so we work left to right",
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
    let divide = app_code_container_light_blue(root);
    html_div_cycle_code(divide, ["The same happens after a ", divided]);
    html_div_cycle_code(divide, ["", "12 / 2 * 3", " is ", "18"]);
    html_div_cycle_code(divide, [
      "But ",
      "12 / (2 * 3)",
      " does the ",
      "2 * 3",
      " first",
    ]);
    html_div_cycle_code(divide, [
      "",
      "2 * 3",
      " is ",
      "6",
      ", so we have ",
      "12 / 6",
    ]);
    html_div_cycle_code(divide, ["So ", "12 / (2 * 3)", " is ", "2"]);
    let rule = app_code_container_light_blue(root);
    html_div_cycle_code(rule, [
      "Even when both operators are the same strength, ",
      open,
      " and ",
      close,
      " still go first",
    ]);
  }
}
function app_code_lesson_expression_parentheses_same_strength_line(
  a,
  outer_symbol,
  b,
  inner_symbol,
  c,
) {
  arguments_assert(arguments, 5);
  ("the one shape this lesson ever writes: a number, the outer operator, then a group of two numbers");
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let t = text_to(a);
  let t2 = text_to(b);
  let t3 = text_to(c);
  let code = text_combine_multiple([
    t,
    " ",
    outer_symbol,
    " ",
    open,
    t2,
    " ",
    inner_symbol,
    " ",
    t3,
    close,
  ]);
  return code;
}
