import { app_code_lesson_expression_arithmetic_equality_equality } from "./app_code_lesson_expression_arithmetic_equality_equality.mjs";
import { app_code_lesson_expression_arithmetic_equality_title_name_id } from "./app_code_lesson_expression_arithmetic_equality_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { less_than } from "./less_than.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_arithmetic_to_value } from "./app_code_arithmetic_to_value.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_arithmetic_equality() {
  "the step from a comparison with arithmetic on ONE side (already learned - 8 === 3 + 5) to arithmetic on BOTH sides (3 + 4 === 5 + 2). The single new idea: each side is worked out to its own number FIRST, and only then are the two numbers compared - so two different-looking expressions can turn out equal. This is operator precedence: + and the other arithmetic operators bind tighter than ===, so the two sides collapse to numbers before === compares them; the intro says it with solve - a childhood math word, already the learner-facing vocabulary in the whole-part lessons (Solve the formula) - not runs, which is a code-execution term nowhere defined for the learner yet: we solve each side before the ===. Uses === alone, where the true/false answer is simply whether the two sides land on the same number, the most intuitive both-sides case; the other comparisons with arithmetic on both sides are a later step. Placed right after the arithmetic-comparison lesson, and it sets up the swapping lesson, which is this same both-sides shape with the very same expression mirrored on each side.";
  function true_case() {
    "two different-looking arithmetic expressions of the SAME value, so === is true; a second try if the two happen to come out identical";
    let value = integer_random(2, 9);
    let left = app_code_arithmetic_to_value(value);
    let right = app_code_arithmetic_to_value(value);
    let same = equal(left.code, right.code);
    let right_retry = app_code_arithmetic_to_value(value);
    let right_final = ternary(same, right_retry, right);
    let example = app_code_lesson_expression_arithmetic_equality_equality(
      left,
      right_final,
    );
    return example;
  }
  function false_case() {
    "two arithmetic expressions of DIFFERENT values, so === is false; the right value is bumped above the left so they can never coincide";
    let value = integer_random(2, 8);
    let bump = integer_random(1, 3);
    let value_other = add(value, bump);
    let left = app_code_arithmetic_to_value(value);
    let right = app_code_arithmetic_to_value(value_other);
    let example = app_code_lesson_expression_arithmetic_equality_equality(
      left,
      right,
    );
    return example;
  }
  function refill() {
    "four examples a screen, true and false alternating so the learner meets both outcomes each time, and no two neighbours sharing an operator pair so the set looks varied (a neighbour is regenerated until its operator key differs)";
    let makers = [true_case, false_case, true_case, false_case];
    let codes = [];
    let previous_key = "";
    let i = 0;
    while (less_than(i, makers.length)) {
      let maker = makers[i];
      let example = maker();
      while (equal(example.key, previous_key)) {
        example = maker();
      }
      codes.push(example.code);
      previous_key = example.key;
      i = add(i, 1);
    }
    return codes;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_arithmetic_equality_title_name_id();
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
  function above(root) {
    "first the rule, then it worked once true and once false: each side is done first to its own number, and only then are the two numbers compared";
    let header = app_code_container_light_blue(root);
    html_div_cycle_code(header, [
      "Both sides of a comparison can be arithmetic",
    ]);
    let yes = app_code_container_light_blue(root);
    html_div_cycle_code(yes, [
      "For ",
      "3 + 4 === 5 + 2",
      ", we solve ",
      "3 + 4",
      " and ",
      "5 + 2",
      " first, before the ",
      "===",
    ]);
    html_div_cycle_code(yes, [
      "Both are ",
      "7",
      ", so ",
      "7 === 7",
      " is ",
      "true",
    ]);
    let no = app_code_container_light_blue(root);
    html_div_cycle_code(no, [
      "For ",
      "10 - 4 === 2 + 5",
      ", we solve ",
      "10 - 4",
      " and ",
      "2 + 5",
      " first",
    ]);
    html_div_cycle_code(no, [
      "That is ",
      "6",
      " and ",
      "7",
      ", so ",
      "6 === 7",
      " is ",
      "false",
    ]);
  }
}
