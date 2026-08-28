import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_expression_choose_line_operator_refuse(
  span,
  refused,
  node,
  on_wrong,
) {
  "One operator on the line turned down, when it was pressed while another one underneath it still has to go first.";
  "ONLY THE ONE PRESSED IS TURNED DOWN and the rest of the line is left exactly as it was, so the next press is a fresh choice rather than a forced one.";
  "IT IS ALSO PUT BEYOND PRESSING, because a chip that has already been answered with a red would otherwise be pressed again and again for the same red.";
  "IT IS KEPT ON THE LIST OF REFUSALS, because a refusal is answered again the moment the right operator is pressed - and by then the line is holding the marks rather than the presses that made them.";
  arguments_assert(arguments, 4);
  app_code_lesson_quiz_wrong_set(span);
  html_style_set(span, "pointer-events", "none");
  list_add(refused, span);
  on_wrong(node);
}
