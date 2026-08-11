import { app_code_lesson_expression_comparing_a_comparison_naming } from "./app_code_lesson_expression_comparing_a_comparison_naming.mjs";
import { app_code_lesson_expression_comparing_a_comparison_title_name_id } from "./app_code_lesson_expression_comparing_a_comparison_title_name_id.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { property_equals } from "./property_equals.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { equal } from "./equal.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparing_a_comparison() {
  "a comparison standing where a plain true or false stood: 3 === 5 === false. ONE new idea on top of the previous lesson, which compared two plain true/false values - the left side is now a comparison, so it has to be worked out first and only then compared. That is the very rule the arithmetic-comparison lesson already taught (arithmetic first, then compare), with a comparison in the place arithmetic held, so the step is small. The right side stays a plain true or false here; both sides being comparisons is the swapping lesson. Answer is the code's own true/false value, correct by construction.";
  "Taught as replacing rather than as evaluating: a comparison works out to a true or false, so it can be replaced by that true or false, and the line that is left is one the learner already knows how to read. The order caveat is pointed back at a rule they already have - we do * before + - so it is recognised rather than taken on. In every line this lesson can generate, replacing in order lands on the right value on its own.";
  "Parentheses are therefore not shown at all. They change no answer here, so they would be a rule the learner cannot yet see the need for. They earn their place one lesson later, in swapping, where both sides are comparisons and they change the answer for real - a === b === b === a is false while (a === b) === (b === a) is true - and that lesson already introduces them itself.";
  "Without parentheses the unscramble will not accept the true or false first on an === or !== line, and that is right rather than a cost. === does commute, but only around its own two operands: 3 === 5 === false could be written false === (3 === 5), while written flat false === 3 === 5 reads as (false === 3) === 5 - a different line, and false where the original is true. The quiz offers only orderings whose every token has a button, so the commuted form is dropped for wanting parentheses this lesson never shows.";
  "It does accept the true or false first when the left side is < > <= or >=, because those bind tighter than === and !==, so true !== 2 < 5 still reads as true !== (2 < 5). Two lines of the same shape therefore accept different orderings. That is JS precedence showing through rather than a fault, and it is invisible here: swapping is not taught until the next lesson, so nothing has told the learner to try leading with the true or false.";
  let name_id =
    app_code_lesson_expression_comparing_a_comparison_title_name_id();
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
  function keyword(value) {
    "the code word for a true or false value";
    let on_true = js_keyword_true();
    let on_false = js_keyword_false();
    let word = ternary(value, on_true, on_false);
    return word;
  }
  function expression(want_true) {
    "a comparison, then === or !==, then a plain true or false, with the operator picked so the whole line lands on want_true";
    let left = app_code_comparison_side();
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
  function replacing(root, code, value) {
    "the move the whole lesson is: a comparison works out to a true or false, so the comparison can be replaced by that true or false. Said on its own, before any line is walked through, because it is the rule and the walkthroughs are only it happening";
    "The order caveat points back to a rule the learner already has - we do * before + - so replacing in order is a rule they are recognising rather than one they are taking on";
    let card = app_code_container_light_blue(root);
    let answer = keyword(value);
    html_div_cycle_code(card, ["", code, " is ", answer]);
    html_div_cycle_code(card, ["So we can replace ", code, " with ", answer]);
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    html_div_cycle_code(card, [
      "In general, replacing must honor order like ",
      times,
      " before ",
      plus,
    ]);
  }
  function worked_example(root, lead, code, value, operator, right_value) {
    "one line walked through a replacement at a time: the line we start with, the comparison being swapped for its answer, what that leaves, what that comes to, and the whole line's answer";
    "The lead word is given by the caller because it says where this walkthrough sits in the run of them. The first follows from the rule just stated, so it is So; each one after is another of the same, so it is And. A second walkthrough opening with So would claim to follow from the first, which it does not";
    "Five lines rather than one because the move this lesson teaches happens in the middle - the comparison is gone and its answer is sitting where it stood. A line that jumped straight to the final true or false would hide the only new step in the lesson, and the learner would have to take the answer on trust";
    "The last two lines are worked out by the operator's own function rather than typed, so the example cannot say something the code would not do";
    let card = app_code_container_light_blue(root);
    let answer = keyword(value);
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
    let fn = property_get(operator, "fn");
    let ended = fn(value, right_value);
    let ended_code = keyword(ended);
    let opening = text_combine(lead, " for ");
    html_div_cycle_code(card, [opening, whole]);
    html_div_cycle_code(card, ["We replace the ", code, " with ", answer]);
    html_div_cycle_code(card, ["And then we have ", stood_in]);
    html_div_cycle_code(card, ["And ", stood_in, " is ", ended_code]);
    html_div_cycle_code(card, ["So ", whole, " is ", ended_code]);
  }
  function above(root) {
    "first what the word comparison names, then the idea: a comparison results in true or false, so a comparison can be used anywhere a true or false can be; then the replacing rule, then two lines walked through a replacement at a time";
    app_code_lesson_expression_comparing_a_comparison_naming(root);
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
    let same = js_operator_triple_equal();
    let different = js_operator_bang_double_equal();
    replacing(root, "3 === 5", false);
    worked_example(root, "So", "3 === 5", false, same, false);
    worked_example(root, "And", "2 < 5", true, different, true);
  }
}
