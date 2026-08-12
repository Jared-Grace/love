import { app_code_lesson_expression_parentheses_both_sides_wrapped } from "./app_code_lesson_expression_parentheses_both_sides_wrapped.mjs";
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
    let left = app_code_lesson_expression_parentheses_both_sides_wrapped();
    let right = app_code_lesson_expression_parentheses_both_sides_wrapped();
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
    "recall what ( and ) do, then both sides wrapped and worked out, then why the parentheses are needed here when they were not needed before";
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
    html_div_cycle_code(both, [
      "Both sides of ",
      "===",
      " can be a comparison",
    ]);
    html_div_cycle_code(both, [
      "",
      "3 === 5",
      " is ",
      "false",
      ", and ",
      "5 === 3",
      " is ",
      "false",
    ]);
    html_div_cycle_code(both, [
      "So ",
      "(3 === 5) === (5 === 3)",
      " is ",
      "true",
    ]);
    let t = js_keyword_true();
    let f = js_keyword_false();
    let needed = app_code_container_light_blue(root);
    ("The flat line is not left as an assertion that it means something else - it is solved all the way through, one replacement at a time, in the exact walk the comparing-a-comparison lesson taught. Saying only that JavaScript works it out left to right asks the reader to do that walk in their head, and the walk crosses a step no lesson has ever shown them: a true or false compared with a number. They have the rule for it, from the lesson before last - but having a rule and having performed it are not the same thing, and this card is where the two would first be asked to meet without being introduced.");
    html_div_cycle_code(needed, ["Here we need the ", open, " and ", close]);
    html_div_cycle_code(needed, [
      "Without them we would write ",
      "3 === 5 === 5 === 3",
    ]);
    html_div_cycle_code(needed, [
      "That replaces the ",
      "3 === 5",
      " with ",
      f,
      ", leaving ",
      "false === 5 === 3",
    ]);
    let solved = app_code_container_light_blue(root);
    html_div_cycle_code(solved, ["Then ", "false === 5", " is solved"]);
    html_div_cycle_code(solved, [
      "A ",
      t,
      " or ",
      f,
      " is never equal to a number",
    ]);
    html_div_cycle_code(solved, ["So ", "false === 5", " is ", f]);
    html_div_cycle_code(solved, [
      "Replacing leaves ",
      "false === 3",
      ", which is ",
      f,
    ]);
    let why = app_code_container_light_blue(root);
    html_div_cycle_code(why, [
      "So if we want the ",
      "5 === 3",
      " solved first, it needs to be inside ",
      open,
      " and ",
      close,
    ]);
  }
}
