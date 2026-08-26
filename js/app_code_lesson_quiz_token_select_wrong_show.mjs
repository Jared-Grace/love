import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { app_code_quiz_token_run_together_note_set } from "./app_code_quiz_token_run_together_note_set.mjs";
export function app_code_lesson_quiz_token_select_wrong_show(
  b,
  note_div,
  chosen,
  token,
  tokens_unique,
  on_wrong,
) {
  "Answer a tap that no order still standing could have begun with: redden the piece that was tapped, say in words under the line whether the mistake was one real code writes as a piece of its own, and tell the quiz the question was got wrong.";
  "The words and the red are one act rather than two, because either alone is a half answer. The red says which tap, and nothing else; the note says why, and points at no button.";
  arguments_assert(arguments, 6);
  app_code_lesson_quiz_wrong_set(b);
  app_code_quiz_token_run_together_note_set(
    note_div,
    chosen,
    token,
    tokens_unique,
  );
  on_wrong();
}
