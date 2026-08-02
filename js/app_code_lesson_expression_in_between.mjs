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
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_in_between() {
  "the capstone of the comparison track: to check a number is between two others you must NOT chain the comparisons (2 < 5 < 8 does not do what you mean - JavaScript works out 2 < 5 first, then compares that result with 8). The fix, taught here, is to repeat the middle number and join with && (2 < 5 && 5 < 8), which is exactly the shape the previous lesson drilled. The trap and the fix live in the intro; the quiz drills the correct idiom a < b && b < c, so the learner practises the right thing rather than predicting the broken one. Answer is the code's own true/false value, correct by construction.";
  function range_true() {
    "a < b && b < c where a < b < c really holds, so it is true";
    let a = integer_random(1, 4);
    let min = add(a, 1);
    let b = integer_random(min, 6);
    let min2 = add(b, 1);
    let c = integer_random(min2, 9);
    let code = range_code(a, b, c);
    return code;
  }
  function range_false() {
    "a < b && b < c where the middle is outside a..c, so it is false";
    let a = integer_random(2, 4);
    let min3 = add(a, 2);
    let c = integer_random(min3, 9);
    let below = subtract(a, 1);
    let above = add(c, 1);
    let b = list_random_item([below, above]);
    let code = range_code(a, b, c);
    return code;
  }
  function range_code(a, b, c) {
    "the fixed idiom: a < b && b < c, the middle number repeated";
    let a_text = text_to(a);
    let b_text = text_to(b);
    let c_text = text_to(c);
    let code = text_combine_multiple([
      a_text,
      " < ",
      b_text,
      " && ",
      b_text,
      " < ",
      c_text,
    ]);
    return code;
  }
  function refill() {
    "four examples a screen, true and false alternating";
    let v = range_true();
    let v2 = range_false();
    let v3 = range_true();
    let v4 = range_false();
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
    "the home title: in between, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "in between");
      }
      return render;
    }
    let rights = ["in between"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "the goal, then the trap, then the fix: repeat the middle number and join with &&";
    let goal = app_code_container_light_blue(root);
    html_div_cycle_code(goal, [
      "Is ",
      "5",
      " between ",
      "2",
      " and ",
      "8",
      "?",
    ]);
    let trap = app_code_container_light_blue(root);
    html_div_cycle_code(trap, [
      "You might write ",
      "2 < 5 < 8",
      ", but this does not work",
    ]);
    html_div_cycle_code(trap, [
      "JavaScript works out ",
      "2 < 5",
      " first, then compares that with ",
      "8",
      " - not what you meant",
    ]);
    let fix = app_code_container_light_blue(root);
    html_div_cycle_code(fix, [
      "Repeat the middle number with ",
      "&&",
      ": ",
      "2 < 5 && 5 < 8",
    ]);
    html_div_cycle_code(fix, [
      "Now each comparison uses ",
      "5",
      ", so it checks ",
      "5",
      " properly",
    ]);
  }
}
