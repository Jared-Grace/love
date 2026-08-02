import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_swapping() {
  "the next step after both-sides-arithmetic: put the SAME two numbers on each side, but swapped around the operator - a op b === b op a. With + and * the two sides land on the same number, so it is true; with -, /, < and > the order matters, so the two sides differ and it is false. The learner meets the idea that swapping sometimes keeps the answer and sometimes flips it, which is exactly what the chained-comparison pitfall (2 < 5 < 3) later turns on. Answer is the code's own true/false value, correct by construction. Comparisons parse cleanly without parentheses because < and > bind tighter than ===.";
  function distinct_pair() {
    "two different small numbers, so swapping actually changes the order";
    let a = integer_random(2, 9);
    let b_raw = integer_random(2, 9);
    let collide = equal(a, b_raw);
    let on_true = add(b_raw, 1);
    let b = ternary(collide, on_true, b_raw);
    let pair = [a, b];
    return pair;
  }
  function operator_random(want_true) {
    "an operator whose swap is true (+, *) when want_true, otherwise one whose swap is false (-, /, %, <, >, <=, >=); ** is left out because 2 ** 4 === 4 ** 2 is 16 === 16, the one distinct pair where swapping exponent does not flip the answer";
    let true_ops = ["+", "*"];
    let false_ops = ["-", "/", "%", "<", ">", "<=", ">="];
    let ops = ternary(want_true, true_ops, false_ops);
    let op = list_random_item(ops);
    return op;
  }
  function side(left_number, op, right_number) {
    "one side of the equality: a number, the operator, another number";
    let left = text_to(left_number);
    let right = text_to(right_number);
    let code = text_combine_multiple([left, " ", op, " ", right]);
    return code;
  }
  function expression(want_true) {
    "a op b === b op a, the same two numbers swapped around the operator";
    let op = operator_random(want_true);
    let pair = distinct_pair();
    let a = pair[0];
    let b = pair[1];
    let left = side(a, op, b);
    let right = side(b, op, a);
    let code = text_combine_multiple([left, " === ", right]);
    return code;
  }
  function refill() {
    "four examples a screen, true and false alternating";
    let v = expression(true);
    let v2 = expression(false);
    let v3 = expression(true);
    let v4 = expression(false);
    let list = [v, v2, v3, v4];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    forwards_answer_count_override: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title: swapping, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "swapping");
      }
      return render;
    }
    let rights = ["swapping"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "the rule, then it worked once where swapping keeps the answer and once where it flips it";
    let header = app_code_container_light_blue(root);
    html_div_cycle_code(header, ["Swapping the numbers around an operator"]);
    let yes = app_code_container_light_blue(root);
    html_div_cycle_code(yes, [
      "For ",
      "3 + 4 === 4 + 3",
      ", both sides are ",
      "7",
      ", so it is ",
      "true",
    ]);
    html_div_cycle_code(yes, [
      "With ",
      "+",
      " and ",
      "*",
      ", the order does not matter",
    ]);
    let no = app_code_container_light_blue(root);
    html_div_cycle_code(no, [
      "For ",
      "6 - 2 === 2 - 6",
      ", the sides are ",
      "4",
      " and ",
      "-4",
      ", so it is ",
      "false",
    ]);
    html_div_cycle_code(no, [
      "With ",
      "-",
      ", ",
      "/",
      " and ",
      "<",
      ", the order matters",
    ]);
  }
}
