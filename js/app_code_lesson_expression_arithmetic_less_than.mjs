import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
import { ternary } from "./ternary.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_arithmetic_less_than() {
  "the first expression mixing arithmetic with a comparison, and it covers ALL the arithmetic at once - not one lesson per operator. The single new idea: the two sides of a comparison can themselves be arithmetic, and we always do the arithmetic FIRST (a comparison needs two numbers), then compare, giving true or false. That one rule is uniform - every arithmetic operator binds tighter than the comparison - so + < , - < , * < are the SAME idea, taught together by VARYING the arithmetic across examples rather than split into separate lessons. The comparison is kept as < here so the only new thing is arithmetic-on-the-sides; > <= >= === !== generalise for free by the same rule. The intro states the rule and works it twice with DIFFERENT arithmetic (9 < 2 + 3 false, 3 * 2 < 7 true), each doing the arithmetic first, and with the arithmetic on the right then the left to prove position does not change what we do first. Four refreshable examples vary the operator (+ - *), put the arithmetic on the left and the right, and show true and false. Small whole numbers only; subtraction never goes negative (the larger number is on the left) and multiplication uses small factors; every comparison is strict, never the equal case, so this stays about arithmetic and < and not <=. Intended home: right after the comparison operators and the arithmetic precedence pair lessons, as the first step that lets a comparison's sides be expressions; parked at the END for now while one student is mid-stream, written as if it sat at that earlier home.";
  let less_than_operator = js_operator_less_than();
  let less_than_symbol = property_get(less_than_operator, "operator");
  let less_than_fn = property_get(less_than_operator, "fn");
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
  let combos = [
    {
      op: op_add,
      arithmetic_left: true,
      want_true: true,
    },
    {
      op: op_subtract,
      arithmetic_left: false,
      want_true: false,
    },
    {
      op: op_multiply,
      arithmetic_left: false,
      want_true: true,
    },
    {
      op: op_add,
      arithmetic_left: true,
      want_true: false,
    },
  ];
  function one(combo) {
    "one comparison code string whose true/false answer is fixed by construction: the arithmetic piece makes a value, and the OTHER number is placed above or below that value to force the wanted answer - with the arithmetic on the LEFT of the < (arithmetic_left) or on the RIGHT, so the learner meets arithmetic on both sides of the comparison";
    let op = property_get(combo, "op");
    let arithmetic_left = property_get(combo, "arithmetic_left");
    let want_true = property_get(combo, "want_true");
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
    let max = subtract(value, 1);
    let below_value = integer_random(1, max);
    let third = ternary(want_true, above_value, below_value);
    let single = ternary(want_true, below_value, above_value);
    let on_false = text_to(single);
    let left = ternary(arithmetic_left, arithmetic_code, on_false);
    let on_true = text_to(third);
    let right = ternary(arithmetic_left, on_true, arithmetic_code);
    let code = text_combine_multiple([left, " ", less_than_symbol, " ", right]);
    return code;
  }
  function refill() {
    "the four comparisons for one screen: add-left true, subtract-right false, multiply-right true, add-left false - so the two demo examples (the first two) are one true and one false with two different operators, and all four span +, -, *, both arrangements and both answers";
    let list = list_map(combos, one);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  function above(root) {
    "the intro: the one rule, then it worked twice with DIFFERENT arithmetic and on opposite sides of the <, every result computed from the < comparison so nothing is hand-typed";
    let header = app_code_container_light_blue(root);
    html_div_cycle_code(header, [
      "We always do the arithmetic before the ",
      less_than_symbol,
    ]);
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
      let on_true2 = text_to(other);
      let full_left = ternary(other_on_left, on_true2, sub);
      let on_false2 = text_to(other);
      let full_right = ternary(other_on_left, sub, on_false2);
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
      html_div_cycle_code(box, [
        "For ",
        full_left,
        " ",
        less_than_symbol,
        " ",
        full_right,
        ", we do ",
        sub,
        " first, which is ",
        t5,
      ]);
      let t6 = text_to(final);
      html_div_cycle_code(box, [
        "Now we have ",
        combined_left,
        " ",
        less_than_symbol,
        " ",
        combined_right,
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
    "the home title is arithmetic <, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "arithmetic ");
        html_span_text_code_dark(parent, less_than_symbol);
      }
      return render;
    }
    let rights = ["arithmetic less than"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    unscramble_label: "Build the code that gives this value: ",
    forwards_answer_count_override: 2,
  });
  return lesson;
}
