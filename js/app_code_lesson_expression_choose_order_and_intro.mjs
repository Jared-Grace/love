export function app_code_lesson_expression_choose_order_and_intro(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed and nothing else. The learner already solves both sides of a line and then the operator between them; the whole of what this screen adds is that the operator between them can be &&, and that a comparison is solved before it.");
  html_div_cycle_code(parent, [
    "Now the operator in the middle can be ",
    "&&",
    ", with a comparison on each side",
  ]);
  html_div_cycle_code(parent, [
    "The two comparisons are still solved before the ",
    "&&",
  ]);
}
