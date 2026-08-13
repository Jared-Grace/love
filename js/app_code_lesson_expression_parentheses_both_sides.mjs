import { app_code_lesson_expression_parentheses_both_sides_card_flat_line } from "./app_code_lesson_expression_parentheses_both_sides_card_flat_line.mjs";
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
    "recall what ( and ) do, then each side named as a comparison and the rule read off the pair, then the two put together and valued, then why the parentheses are needed here when they were not needed before";
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
    ("The two comparisons first and the rule about them after, rather than the rule and then its instances. A general sentence arriving first has nothing yet to attach itself to, so the learner has to hold it until something does - the same climb from one instance up to the rule is argued at length in the comparing-a-comparison lesson, and this card used to open on the rule it now ends the first half with.");
    ("Each side is named as a comparison before it is valued, because that is the premise the rule below rests on. The card used to state both values and leave a learner to notice for themselves that each of them came from a comparison.");
    ("Putting the two on either side is its own line, and the line it makes is the next one, and the value of that line is the one after. One line carrying the assembly and the answer together hides the step where two false values are compared, which is the only new thing here.");
    ("The whole line is written out again rather than referred back to, the same way the flat-line card below writes false === 5 twice. The repeated name is what ties the answer to the line it belongs to.");
    html_div_cycle_code(both, [
      "",
      "3 === 5",
      " is a comparison and is ",
      "false",
    ]);
    html_div_cycle_code(both, [
      "",
      "5 === 3",
      " is also a comparison and is ",
      "false",
    ]);
    html_div_cycle_code(both, ["Both sides of ", "===", " can be comparisons"]);
    ("A side is a side of something, and this line has to say what. Left at on one side it leans back on the sentence above it, and the two things being placed each hold a === of their own - so the one word missing is the one that tells those apart from the one they are being put either side of. Another names it and says there is now one more of them than there was.");
    html_div_cycle_code(both, [
      "So we can put ",
      "3 === 5",
      " on one side of another ",
      "===",
      " and ",
      "5 === 3",
      " on the other side",
    ]);
    html_div_cycle_code(both, ["Then we have ", "(3 === 5) === (5 === 3)"]);
    html_div_cycle_code(both, [
      "And ",
      "(3 === 5) === (5 === 3)",
      " is ",
      "true",
    ]);
    app_code_lesson_expression_parentheses_both_sides_card_flat_line(
      root,
      open,
      close,
    );
  }
}
