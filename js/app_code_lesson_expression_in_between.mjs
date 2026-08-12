import { app_code_lesson_expression_in_between_card_chained } from "./app_code_lesson_expression_in_between_card_chained.mjs";
import { app_code_lesson_expression_in_between_range_code } from "./app_code_lesson_expression_in_between_range_code.mjs";
import { app_code_lesson_expression_in_between_title_name_id } from "./app_code_lesson_expression_in_between_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_lesson_expression_in_between() {
  "the capstone of the comparison track: to check a number is between two others you must NOT chain the comparisons (2 < 5 < 8 does not do what you mean - JavaScript works out 2 < 5 first, then compares that result with 8). The fix, taught here, is to repeat the middle number and join with && (2 < 5 && 5 < 8), which is exactly the shape the previous lesson drilled. The trap and the fix live in the intro; the quiz drills the correct idiom a < b && b < c, so the learner practises the right thing rather than predicting the broken one. Answer is the code's own true/false value, correct by construction.";
  function range_true() {
    "a < b && b < c where a < b < c really holds, so it is true";
    let a = integer_random(1, 4);
    let min = add(a, 1);
    let b = integer_random(min, 6);
    let min2 = add(b, 1);
    let c = integer_random(min2, 9);
    let code = app_code_lesson_expression_in_between_range_code(a, b, c);
    return code;
  }
  function range_false() {
    "a < b && b < c where the middle is outside a..c, so it is false";
    let a = integer_random(2, 4);
    let min3 = add(a, 2);
    let c = integer_random(min3, 9);
    let below = subtract(a, 1);
    let above_c = add(c, 1);
    let b = list_random_item([below, above_c]);
    let code = app_code_lesson_expression_in_between_range_code(a, b, c);
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
  let name_id = app_code_lesson_expression_in_between_title_name_id();
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
    "the goal, then the trap, then the fix: repeat the middle number and join with &&";
    let goal = app_code_container_light_blue(root);
    html_div_cycle_code(goal, [
      "Is ",
      "5",
      " between ",
      "2",
      " and ",
      "8",
      " ?",
    ]);
    app_code_lesson_expression_in_between_card_chained(root);
    let fix = app_code_container_light_blue(root);
    ("The fix is given as a break into pieces rather than as repeat the middle number, because repeating a number is what the writing looks like, not what it means. Two pieces that must both hold is the meaning, and it is also what && was taught to do, so the && arrives as the thing the reader already has rather than as a trick. The last line then hands back the shorthand, once it stands for something.");
    html_div_cycle_code(fix, [
      "Instead of a single ",
      "2 < 5 < 8",
      ", we break it into two pieces: ",
      "2 < 5",
      " and ",
      "5 < 8",
    ]);
    html_div_cycle_code(fix, [
      "Both pieces must be ",
      "true",
      ", so we write ",
      "2 < 5 && 5 < 8",
    ]);
    html_div_cycle_code(fix, [
      "In a sense we just replace the middle ",
      "5",
      " with ",
      "5 && 5",
    ]);
  }
}
