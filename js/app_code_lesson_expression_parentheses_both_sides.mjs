import { app_code_lesson_expression_parentheses_both_sides_card_flat_line } from "./app_code_lesson_expression_parentheses_both_sides_card_flat_line.mjs";
import { app_code_comparison_side_wrapped } from "./app_code_comparison_side_wrapped.mjs";
import { app_code_lesson_expression_parentheses_both_sides_title_name_id } from "./app_code_lesson_expression_parentheses_both_sides_title_name_id.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { equal } from "./equal.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_parentheses_both_sides() {
  "both sides a comparison, each wrapped: (3 === 5) === (5 === 3). The previous lesson put ( and ) around one comparison, where they changed nothing; here they change the answer, which is what earns them. Written flat, 3 === 5 === 5 === 3 is worked out left to right and is a different line with a different value, so the parentheses are not decoration - they are what makes the line say what it means.";
  "This is the shape the swapping lesson needs, and it is taught here on its own so that swapping teaches only swapping.";
  let name_id =
    app_code_lesson_expression_parentheses_both_sides_title_name_id();
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
  function expression(want_true) {
    "a wrapped comparison, then === or !==, then another wrapped comparison, with the operator picked so the whole line lands on want_true";
    let left = app_code_comparison_side_wrapped();
    let right = app_code_comparison_side_wrapped();
    let left_value = property_get(left, "value");
    let right_value = property_get(right, "value");
    let agree = equal(left_value, right_value);
    let wanted = equal(agree, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let left_code = property_get(left, "code");
    let right_code = property_get(right, "code");
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
  function above(root) {
    "recall what ( and ) do, then the line posed and solved a side at a time, then why the parentheses are needed here when they were not needed before";
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let recall = app_code_container_light_blue(root);
    ("On its own is this lesson's OWN angle and is kept deliberately - it does not reach for the shared inside-before-outside sentence, which is the wrong frame here: with a bracket on each side, neither one is outside the other, so before what has no answer. What each bracket does have is that it collapses to a single true or false by itself, which is exactly what the two lines below then show.");
    ("Solve, not work it out. The track runs on solve - a childhood math word, decided in the arithmetic-both-sides lesson - and work out is nowhere else in learner-facing text. The comparison is also named rather than left as it, and it is the comparison that is solved rather than the brackets doing the solving: brackets do not solve anything, they say what is solved apart from the rest.");
    html_div_cycle_code(recall, [
      "Remember: a comparison inside ",
      open,
      " and ",
      close,
      " is solved on its own",
    ]);
    let both = app_code_container_light_blue(root);
    ("The line is posed first and then solved, which is the shape of the two screens behind this one - the comparing-a-comparison walkthrough and the choose-order-pair run both open on Suppose we want to solve and work down from it. A learner arriving here reads the third one as the same act rather than as a third way of being taught.");
    ("The card used to spend its first four rows arguing that the line was allowed to exist: each side named as a comparison, then both sides of === can be comparisons, then so we can put one on either side of another ===. That is construction, and this lesson never asks for it - the quiz hands over a finished line every time and asks what it comes to. The two rows that did solving were the last two, and they jumped from the assembled line straight to its value, hiding the one step that is actually new here: two false values compared against each other. Solving it row by row spends the card on the direction the learner is graded in, and costs two rows fewer than arguing the line into existence first.");
    ("The last row is word for word the shape the choose-order-pair run ends on - replace them to get the middle line, which is the answer. That run is the lesson immediately before this one and the learner has just pressed their way through it, so the same sentence closes the loop rather than opening a new one.");
    let whole = "(3 === 5) === (5 === 3)";
    app_code_lesson_suppose_solve_line(both, "Suppose", whole);
    html_div_cycle_code(both, ["", "3 === 5", " is ", "false"]);
    html_div_cycle_code(both, ["", "5 === 3", " is ", "false"]);
    html_div_cycle_code(both, [
      "Then we replace them to get ",
      "false === false",
      ", which is ",
      "true",
    ]);
    app_code_lesson_expression_parentheses_both_sides_card_flat_line(
      root,
      open,
      close,
    );
  }
}
