import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { app_code_lesson_bold_term } from "./app_code_lesson_bold_term.mjs";
import { each } from "./each.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { property_equals } from "./property_equals.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { equal } from "./equal.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_comparing_a_comparison() {
  "a comparison standing where a plain true or false stood: 3 === 5 === false. ONE new idea on top of the previous lesson, which compared two plain true/false values - the left side is now a comparison, so it has to be worked out first and only then compared. That is the very rule the arithmetic-comparison lesson already taught (arithmetic first, then compare), with a comparison in the place arithmetic held, so the step is small. The right side stays a plain true or false here; both sides being comparisons is the swapping lesson. Answer is the code's own true/false value, correct by construction.";
  "Left to right is the whole rule here, and it is taught as a rule rather than as the reason something else is missing. In every line this lesson can generate, working left to right lands on the right value on its own.";
  "Parentheses are therefore not shown at all. They change no answer here, so they would be a rule the learner cannot yet see the need for. They earn their place one lesson later, in swapping, where both sides are comparisons and they change the answer for real - a === b === b === a is false while (a === b) === (b === a) is true - and that lesson already introduces them itself.";
  let name_id = title_name_id();
  let next_arg = list_iterator_refillable(refill);
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
  function title_name_id() {
    "the home title: comparing a comparison with true or false, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let t = js_keyword_true();
        let f = js_keyword_false();
        html_cycle_code(parent, ["comparing a comparison with ", t, " or ", f]);
      }
      return render;
    }
    let rights = ["comparing a comparison"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function keyword(value) {
    "the code word for a true or false value";
    let on_true = js_keyword_true();
    let on_false = js_keyword_false();
    let word = ternary(value, on_true, on_false);
    return word;
  }
  function comparison_side() {
    "a comparison of two small numbers, with the true or false it works out to";
    let same = js_operator_triple_equal();
    let different = js_operator_bang_double_equal();
    let smaller = js_operator_less_than();
    let bigger = js_operator_greater_than();
    let operators = [same, different, smaller, bigger];
    let operator = list_random_item(operators);
    let symbol = property_get(operator, "operator");
    let fn = property_get(operator, "fn");
    let a = integer_random(2, 9);
    let b = integer_random(2, 9);
    let value = fn(a, b);
    let a_code = text_to(a);
    let b_code = text_to(b);
    let code = text_combine_multiple([a_code, " ", symbol, " ", b_code]);
    let r = {
      code,
      value,
    };
    return r;
  }
  function expression(want_true) {
    "a comparison, then === or !==, then a plain true or false, with the operator picked so the whole line lands on want_true";
    let left = comparison_side();
    let right_value = list_random_item([true, false]);
    let agree = property_equals(left, "value", right_value);
    let wanted = equal(agree, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let left_code = property_get(left, "code");
    let right_code = keyword(right_value);
    let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
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
  function naming(root) {
    "what the word comparison names, said in full before the lesson leans on it. The word has been used since the arithmetic-comparison lesson, but only ever alongside its operators in passing, and every line of this lesson rests on it";
    "Taught by showing rather than by listing symbols: one whole comparison per operator, so the learner reads the shape a comparison takes six times over rather than reading six symbols and being left to assemble the shape. The six come from the one list that holds them, so no other lesson can teach the word a different set";
    "The same two numbers every time, so the only thing that changes down the column is the symbol - which is exactly the thing the word covers. Some of the six answer true and some answer false, and that is left alone on purpose: a comparison is a comparison whatever it answers, and the very next card is where the answer starts to matter";
    let card = app_code_container_light_blue(root);
    app_code_lesson_bold_term(
      card,
      "Here are some examples of ",
      "comparisons",
    );
    function example_show(operator) {
      "one whole comparison for an operator, tiled as code";
      let symbol = property_get(operator, "operator");
      let code = text_combine_multiple(["3 ", symbol, " 5"]);
      html_div_cycle_code(card, ["", code]);
    }
    let operators = js_operators_comparison();
    each(operators, example_show);
  }
  function worked_example(root, code, value, operator, right_value) {
    "one worked line taken a step at a time: what the comparison alone answers, then the whole line with that answer standing in its place, then what that comes to";
    "Three lines rather than one because the whole move this lesson teaches happens in the middle line - the comparison is gone and its answer is sitting where it stood. A line that jumped straight to the final true or false would hide the only new step in the lesson, and the learner would have to take the answer on trust";
    "The last line is worked out by the operator's own function rather than typed, so the example cannot say something the code would not do";
    let card = app_code_container_light_blue(root);
    let answer = keyword(value);
    html_div_cycle_code(card, ["", code, " is ", answer]);
    let symbol = property_get(operator, "operator");
    let right_code = keyword(right_value);
    let whole = text_combine_multiple([code, " ", symbol, " ", right_code]);
    let stood_in = text_combine_multiple([
      answer,
      " ",
      symbol,
      " ",
      right_code,
    ]);
    html_div_cycle_code(card, ["So ", whole, " is ", stood_in]);
    let fn = property_get(operator, "fn");
    let ended = fn(value, right_value);
    let ended_code = keyword(ended);
    html_div_cycle_code(card, ["And ", stood_in, " is ", ended_code]);
  }
  function above(root) {
    "first what the word comparison names, then the idea: a comparison results in true or false, so a comparison can be used anywhere a true or false can be; then the left-to-right rule, then two worked examples taken a step at a time";
    naming(root);
    let idea = app_code_container_light_blue(root);
    let t = js_keyword_true();
    let f = js_keyword_false();
    let smaller = js_operator_less_than_symbol();
    html_div_cycle_code(idea, [
      "A comparison like ",
      smaller,
      " will result in ",
      t,
      " or ",
      f,
    ]);
    let t2 = js_keyword_true();
    let f2 = js_keyword_false();
    html_div_cycle_code(idea, [
      "So anywhere ",
      t2,
      " or ",
      f2,
      " can be used, we can use a comparison",
    ]);
    let order = app_code_container_light_blue(root);
    html_div_cycle_code(order, [
      "We work out the comparisons from left to right",
    ]);
    let same = js_operator_triple_equal();
    let different = js_operator_bang_double_equal();
    worked_example(root, "3 === 5", false, same, false);
    worked_example(root, "2 < 5", true, different, true);
  }
}
