import { app_code_lesson_expression_arithmetic_less_than_op_divide } from "./app_code_lesson_expression_arithmetic_less_than_op_divide.mjs";
import { app_code_lesson_expression_arithmetic_less_than_op_exponent } from "./app_code_lesson_expression_arithmetic_less_than_op_exponent.mjs";
import { app_code_lesson_expression_arithmetic_less_than_op_add } from "./app_code_lesson_expression_arithmetic_less_than_op_add.mjs";
import { app_code_lesson_expression_arithmetic_less_than_above } from "./app_code_lesson_expression_arithmetic_less_than_above.mjs";
import { app_code_lesson_expression_arithmetic_less_than_one } from "./app_code_lesson_expression_arithmetic_less_than_one.mjs";
import { app_code_lesson_expression_arithmetic_less_than_title_name_id } from "./app_code_lesson_expression_arithmetic_less_than_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than_equal } from "./js_operator_less_than_equal.mjs";
import { js_operator_greater_than_equal } from "./js_operator_greater_than_equal.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_arithmetic_less_than() {
  "the first expression mixing arithmetic with a comparison, and it covers ALL the arithmetic at once - not one lesson per operator. The single new idea: the two sides of a comparison can themselves be arithmetic, and we always do the arithmetic FIRST (a comparison needs two numbers), then compare, giving true or false. That one rule is uniform - every arithmetic operator binds tighter than the comparison - so + < , - < , * < are the SAME idea, taught together by VARYING the arithmetic across examples rather than split into separate lessons. The comparison itself also VARIES across the examples over all six the student has met (< > <= >= === !==), because the rule - arithmetic first, then compare - is identical for every one of them, so they belong in this one lesson too rather than six near-identical copies. The true/false answer is forced per example by RUNNING the example's own comparison fn against candidate numbers (below/above/equal to the arithmetic value) and keeping the one that gives the wanted answer, so no answer can be mis-derived operator by operator. The intro states the rule and works it twice with DIFFERENT arithmetic (9 < 2 + 3 false, 3 * 2 < 7 true), each doing the arithmetic first, and with the arithmetic on the right then the left to prove position does not change what we do first. Eight refreshable examples vary the operator across the already-learned number binary operators (+ - * / **), put the arithmetic on the left and the right, and show true and false; the right side is emphasised because arithmetic on the right of the < is where the rule actually bites - left-to-right alone would put the < first and be wrong - whereas on the left, plain left-to-right already lands on the right answer. Small whole numbers only; subtraction never goes negative (the larger number is on the left) and multiplication uses small factors; the equal case appears only where the operator needs it (=== and its like), while < and > stay strict. Placed right after the arithmetic precedence pair lessons and the exponent lesson, as the first step that lets a comparison's sides be expressions, so the jump is small - the learner just finished building arithmetic and now wraps a comparison around it. Remainder (%) is deliberately left out: it is not taught until the later remainder lessons, and keeping it out is what lets this lesson sit this early, right on top of the arithmetic it compares.";
  let less_than_operator = js_operator_less_than();
  let less_than_symbol = property_get(less_than_operator, "operator");
  let less_than_fn = property_get(less_than_operator, "fn");
  let greater_than_operator = js_operator_greater_than();
  let less_than_equal_operator = js_operator_less_than_equal();
  let greater_than_equal_operator = js_operator_greater_than_equal();
  let triple_equal_operator = js_operator_triple_equal();
  let bang_double_equal_operator = js_operator_bang_double_equal();
  function op_add() {
    let r = app_code_lesson_expression_arithmetic_less_than_op_add();
    return r;
  }
  function op_subtract() {
    "the - arithmetic piece: the larger number on the left so the result is never negative, and the result is at least 2";
    let result = integer_random(2, 5);
    let right = integer_random(1, 4);
    let left = add(result, right);
    let r2 = {
      left,
      right,
      symbol: "-",
      value: result,
    };
    return r2;
  }
  function op_multiply() {
    "the * arithmetic piece: two small factors so the product stays small";
    let x = integer_random(2, 4);
    let y = integer_random(2, 4);
    let value = multiply(x, y);
    let r3 = {
      left: x,
      right: y,
      symbol: "*",
      value,
    };
    return r3;
  }
  function op_divide() {
    let r6 = app_code_lesson_expression_arithmetic_less_than_op_divide();
    return r6;
  }
  function op_exponent() {
    let r8 = app_code_lesson_expression_arithmetic_less_than_op_exponent();
    return r8;
  }
  let combos = [
    {
      op: op_add,
      arithmetic_left: true,
      want_true: true,
      comparison: less_than_operator,
    },
    {
      op: op_multiply,
      arithmetic_left: false,
      want_true: false,
      comparison: greater_than_operator,
    },
    {
      op: op_subtract,
      arithmetic_left: false,
      want_true: true,
      comparison: less_than_equal_operator,
    },
    {
      op: op_divide,
      arithmetic_left: false,
      want_true: false,
      comparison: greater_than_equal_operator,
    },
    {
      op: op_add,
      arithmetic_left: false,
      want_true: true,
      comparison: triple_equal_operator,
    },
    {
      op: op_exponent,
      arithmetic_left: false,
      want_true: false,
      comparison: bang_double_equal_operator,
    },
    {
      op: op_divide,
      arithmetic_left: true,
      want_true: true,
      comparison: less_than_operator,
    },
    {
      op: op_subtract,
      arithmetic_left: true,
      want_true: false,
      comparison: greater_than_operator,
    },
  ];
  function one(combo) {
    let r5 = app_code_lesson_expression_arithmetic_less_than_one(combo);
    return r5;
  }
  function refill() {
    "the eight refreshable comparisons, four shown per screen, spanning + - * / ** on both sides of the < and both answers; the first two are the demo pair (one true, one false, two different operators); the right side is emphasised because arithmetic on the right of the < is where doing it first actually matters (on the left, plain left-to-right already gives the right answer)";
    let list = list_map(combos, one);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  function above(root) {
    let r7 = app_code_lesson_expression_arithmetic_less_than_above(
      root,
      less_than_fn,
      less_than_symbol,
    );
    return r7;
  }
  let name_id = app_code_lesson_expression_arithmetic_less_than_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
