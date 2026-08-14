import { js_code_not } from "./js_code_not.mjs";
import { app_code_lesson_expression_not_comparison_intro } from "./app_code_lesson_expression_not_comparison_intro.mjs";
import { app_code_lesson_expression_not_comparison_title_name_id } from "./app_code_lesson_expression_not_comparison_title_name_id.mjs";
import { app_code_comparison_side_wrapped } from "./app_code_comparison_side_wrapped.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { invoke_until } from "./invoke_until.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_not_comparison() {
  "the step from ! on another ! (already learned) to ! on a whole comparison: !(3 === 5). One new idea, and it is the brackets - a ! applies only to what is next to it, so the comparison has to be gathered into one thing before the ! can apply to all of it.";
  "That the thing under a ! can be something which works out to true or false is NOT new here; the lesson before this put a ! under a ! and made exactly that point. Splitting the two is what leaves this lesson with a single idea in it.";
  "The intro says what the ! would apply to without the brackets and stops there. It does not say what !3 works out to, because that answer needs a number counted as true or false, which no lesson has taught and this one is not the place to teach. Naming what the ! applies to is enough to motivate the brackets, and it is true.";
  "The comparisons vary over < > === !== - every comparison the learner already owns - so the only thing being learned is the bracket. One screen shows an inner comparison that is true and one that is false, so neither the inner nor the outer value can be guessed from habit.";
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
    let code = js_code_not(inner);
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
    above: app_code_lesson_expression_not_comparison_intro,
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
}
