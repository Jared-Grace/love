import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_container_light_blue_div } from "./app_code_container_light_blue_div.mjs";
import { integer_random_below } from "./integer_random_below.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_operators_word_list } from "./app_code_operators_word_list.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than_equal } from "./js_operator_less_than_equal.mjs";
import { js_operator_greater_than_equal } from "./js_operator_greater_than_equal.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
import { ternary } from "./ternary.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { exponent } from "./exponent.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
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
    "the + arithmetic piece: two small addends and their sum, sum always at least 2";
    let x = integer_random(1, 4);
    let y = integer_random(1, 4);
    let value = add(x, y);
    let r = {
      left: x,
      right: y,
      symbol: "+",
      value,
    };
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
    "the / arithmetic piece: the top is a multiple of the bottom so the result is a small whole number";
    let bottom = integer_random(2, 4);
    let value = integer_random(2, 5);
    let top = multiply(value, bottom);
    let r4 = {
      left: top,
      right: bottom,
      symbol: "/",
      value,
    };
    return r4;
  }
  function op_exponent() {
    "the ** arithmetic piece: a small base to a small power so the result stays small";
    let base = integer_random(2, 3);
    let power = integer_random(2, 3);
    let value = exponent(base, power);
    let r6 = {
      left: base,
      right: power,
      symbol: "**",
      value,
    };
    return r6;
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
    "one comparison code string whose true/false answer is fixed by construction: the arithmetic piece makes a value, and the OTHER number is chosen from below/above/equal to that value so the combo's comparison operator yields the wanted answer - decided by RUNNING the operator's own fn, so the boolean can never be mis-derived per operator (=== needs the equal case, < never uses it). The arithmetic sits on the LEFT of the comparison (arithmetic_left) or on the RIGHT, so the learner meets arithmetic on both sides.";
    let op = property_get(combo, "op");
    let arithmetic_left = property_get(combo, "arithmetic_left");
    let want_true = property_get(combo, "want_true");
    let comparison = property_get(combo, "comparison");
    let comparison_symbol = property_get(comparison, "operator");
    let comparison_fn = property_get(comparison, "fn");
    let piece = op();
    let piece_left = property_get(piece, "left");
    let piece_symbol = property_get(piece, "symbol");
    let piece_right = property_get(piece, "right");
    let value = property_get(piece, "value");
    let t = text_to(piece_left);
    let t2 = text_to(piece_right);
    let arithmetic_code = text_combine_multiple([
      t,
      " ",
      piece_symbol,
      " ",
      t2,
    ]);
    let right2 = integer_random(1, 3);
    let above_value = add(value, right2);
    let below_value = integer_random_below(value);
    let candidates = [below_value, above_value, value];
    function yields(other_number) {
      "true when placing this other number against the arithmetic value makes the comparison give the answer we want; equal is last in the list so strict < and > pick a strict number and only === / !== reach the equal case";
      let side_left = ternary(arithmetic_left, value, other_number);
      let side_right = ternary(arithmetic_left, other_number, value);
      let result = comparison_fn(side_left, side_right);
      let same = equal(result, want_true);
      return same;
    }
    let good = list_filter(candidates, yields);
    let other = list_first(good);
    let other_text = text_to(other);
    let left = ternary(arithmetic_left, arithmetic_code, other_text);
    let right = ternary(arithmetic_left, other_text, arithmetic_code);
    let code = text_combine_multiple([
      left,
      " ",
      comparison_symbol,
      " ",
      right,
    ]);
    return code;
  }
  function refill() {
    "the eight refreshable comparisons, four shown per screen, spanning + - * / ** on both sides of the < and both answers; the first two are the demo pair (one true, one false, two different operators); the right side is emphasised because arithmetic on the right of the < is where doing it first actually matters (on the left, plain left-to-right already gives the right answer)";
    let list = list_map(combos, one);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  function above(root) {
    "the intro: the one rule, then it worked twice with DIFFERENT arithmetic and on opposite sides of the <, every result computed from the < comparison so nothing is hand-typed";
    let line = app_code_container_light_blue_div(root);
    html_span_text(line, "We always do the ");
    let four = js_operators_arithmetic();
    let o = js_operator_double_asterisk();
    let more = [o];
    let operators = list_concat(four, more);
    function operator_symbol(operator) {
      "the symbol shown in an operator's tile";
      let symbol = property_get(operator, "operator");
      return symbol;
    }
    app_code_operators_word_list(line, operators, "or", operator_symbol);
    html_span_text(line, " before any comparison ");
    let comparisons = js_operators_comparison();
    app_code_operators_word_list(line, comparisons, "or", operator_symbol);
    function worked_example(
      other,
      other_on_left,
      a_left,
      a_symbol,
      a_right,
      a_value,
    ) {
      "one worked example: the arithmetic sub-expression done first to its value, then the comparison to true or false; other_on_left puts the plain number on the left of the < (arithmetic on the right) or the reverse";
      let t3 = text_to(a_left);
      let t4 = text_to(a_right);
      let sub = text_combine_multiple([t3, " ", a_symbol, " ", t4]);
      let on_true = text_to(other);
      let full_left = ternary(other_on_left, on_true, sub);
      let on_false = text_to(other);
      let full_right = ternary(other_on_left, sub, on_false);
      let on_true3 = text_to(other);
      let on_false3 = text_to(a_value);
      let combined_left = ternary(other_on_left, on_true3, on_false3);
      let on_true4 = text_to(a_value);
      let on_false4 = text_to(other);
      let combined_right = ternary(other_on_left, on_true4, on_false4);
      let final_left = ternary(other_on_left, other, a_value);
      let final_right = ternary(other_on_left, a_value, other);
      let final = less_than_fn(final_left, final_right);
      let box = app_code_container_light_blue(root);
      let t5 = text_to(a_value);
      let full_expression = text_combine_multiple([
        full_left,
        " ",
        less_than_symbol,
        " ",
        full_right,
      ]);
      html_div_cycle_code(box, [
        "For ",
        full_expression,
        ", we do ",
        sub,
        " first, which is ",
        t5,
      ]);
      let t6 = text_to(final);
      let combined_expression = text_combine_multiple([
        combined_left,
        " ",
        less_than_symbol,
        " ",
        combined_right,
      ]);
      html_div_cycle_code(box, [
        "Now we have ",
        combined_expression,
        ", which is ",
        t6,
      ]);
    }
    let sum = add(2, 3);
    worked_example(9, true, 2, "+", 3, sum);
    let p = multiply(3, 2);
    worked_example(7, false, 3, "*", 2, p);
  }
  function title_name_id() {
    "the home title is arithmetic comparisons, an Expressions lesson; the id string stays 'arithmetic less than' so a student's saved progress on this lesson is unchanged";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "arithmetic comparisons");
      }
      return render;
    }
    let rights = ["arithmetic less than"];
    let built = app_code_lesson_name_id_generic(
      rights,
      app_code_category_expressions(),
      title_get,
    );
    return built;
  }
  let name_id = title_name_id();
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
