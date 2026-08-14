import { app_code_lesson_expression_not_comparison_title_name_id } from "./app_code_lesson_expression_not_comparison_title_name_id.mjs";
import { app_code_comparison_side_wrapped } from "./app_code_comparison_side_wrapped.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_prefix } from "./js_code_prefix.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang } from "./js_operator_bang.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { invoke_until } from "./invoke_until.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_not_comparison() {
  "the step from ! on another ! (already learned) to ! on a whole comparison: !(3 === 5). One new idea, and it is the brackets - a ! applies only to what is next to it, so the comparison has to be gathered into one thing before the ! can apply to all of it.";
  "That the thing under a ! can be something which works out to true or false is NOT new here; the lesson before this put a ! under a ! and made exactly that point. Splitting the two is what leaves this lesson with a single idea in it.";
  "The intro says what the ! would apply to without the brackets and stops there. It does not say what !3 works out to, because that answer needs a number counted as true or false, which no lesson has taught and this one is not the place to teach. Naming what the ! applies to is enough to motivate the brackets, and it is true.";
  "The comparisons vary over < > === !== - every comparison the learner already owns - so the only thing being learned is the bracket. One screen shows an inner comparison that is true and one that is false, so neither the inner nor the outer value can be guessed from habit.";
  let operator = js_operator_bang();
  let symbol = property_get(operator, "operator");
  function not_of(code) {
    let prefixed = js_code_prefix(symbol, code);
    return prefixed;
  }
  function wrapped_wanted(want) {
    "a bracketed comparison that works out to want, drawn again until it does";
    function matches(side) {
      let value = property_get(side, "value");
      let same = equal(value, want);
      return same;
    }
    let drawn = invoke_until(app_code_comparison_side_wrapped, matches);
    let wanted = list_last(drawn);
    return wanted;
  }
  function not_of_wanted(want) {
    let side = wrapped_wanted(want);
    let inner = property_get(side, "code");
    let code = not_of(inner);
    return code;
  }
  function refill() {
    "two questions a screen, one with a true comparison inside and one with a false one";
    let v = not_of_wanted(true);
    let v2 = not_of_wanted(false);
    let list = [v, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_not_comparison_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
  function above(root) {
    "how far a ! applies, then the same thing shown on one instance, then the target line built a piece at a time - brackets around the comparison, then the ! in front of them, then the finished line - and finally one worked example carried all the way to its value. Built rather than presented, so the finished shape arrives as the last step of something the reader watched happen rather than as a new thing to take on trust.";
    let true_word = js_keyword_true();
    let false_word = js_keyword_false();
    let equal_operator = js_operator_triple_equal();
    let equal_symbol = property_get(equal_operator, "operator");
    let three = "3";
    let five = "5";
    let comparison = app_code_operator_code(three, equal_symbol, five);
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let bracketed = text_combine_multiple([open, comparison, close]);
    let whole = not_of(bracketed);
    let v3 = not_of(three);
    let bare = text_combine_multiple([v3, " ", equal_symbol, " ", five]);
    let not_false = not_of(false_word);
    let reach = app_code_container_light_blue(root);
    html_div_cycle_code(reach, [
      "A ",
      symbol,
      " applies only to what's right after it",
    ]);
    html_div_cycle_code(reach, [
      "For example, for ",
      bare,
      ", the ",
      symbol,
      " only applies to the ",
      three,
    ]);
    html_div_cycle_code(reach, [
      "To apply the ",
      symbol,
      " to ",
      comparison,
      ", first we put ",
      open,
      " and ",
      close,
      " around ",
      comparison,
      " to get ",
      bracketed,
    ]);
    html_div_cycle_code(reach, [
      "Then we put the ",
      symbol,
      " in front of the ",
      bracketed,
    ]);
    html_div_cycle_code(reach, ["And then we have: ", whole]);
    let worked = app_code_container_light_blue(root);
    html_div_cycle_code(worked, [
      "For ",
      whole,
      ", we do ",
      comparison,
      " first",
    ]);
    html_div_cycle_code(worked, [
      "",
      comparison,
      " is ",
      false_word,
      ", so ",
      whole,
      " is ",
      not_false,
    ]);
    html_div_cycle_code(worked, [
      "",
      not_false,
      " is ",
      true_word,
      ", so ",
      whole,
      " is ",
      true_word,
    ]);
  }
}
