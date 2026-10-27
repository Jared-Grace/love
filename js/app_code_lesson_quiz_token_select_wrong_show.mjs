import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { app_code_quiz_token_run_together_parts } from "./app_code_quiz_token_run_together_parts.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lesson_quiz_pieces_later_parts } from "./app_code_lesson_quiz_pieces_later_parts.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_cycle_code } from "./app_code_cycle_code.mjs";
export function app_code_lesson_quiz_token_select_wrong_show({
  b,
  note_div,
  chosen,
  token,
  tokens_unique,
  on_wrong,
  variations,
}) {
  "Answer a tap that no order still standing could have begun with: redden the piece that was tapped, say in words under the line whether the mistake was one real code writes as a piece of its own, and tell the quiz the question was got wrong.";
  "The words and the red are one act rather than two, because either alone is a half answer. The red says which tap, and nothing else; the note says why, and points at no button.";
  "2026-10-26, at the human's asking that each wrong choice have a helpful reminder: a tap that spelled no third piece is told it is needed but later, where before it was answered by red alone. Two pieces run together is said in its place when that is what happened, because it names the misreading rather than only the timing";
  arguments_assert(arguments, 1);
  app_code_lesson_quiz_wrong_set(b);
  let parts = app_code_quiz_token_run_together_parts(
    chosen,
    token,
    tokens_unique,
  );
  if (null_is(parts)) {
    parts = app_code_lesson_quiz_pieces_later_parts(variations, chosen, token);
  }
  html_clear(note_div);
  app_code_cycle_code(note_div, parts);
  on_wrong();
}
