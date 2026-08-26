import { html_clear } from "./html_clear.mjs";
import { app_code_quiz_token_run_together_parts } from "./app_code_quiz_token_run_together_parts.mjs";
import { null_is } from "./null_is.mjs";
import { html_spans_prose_code } from "./html_spans_prose_code.mjs";
export function app_code_quiz_token_run_together_note_set(
  note_div,
  chosen,
  token,
  tokens_unique,
) {
  "Put under the line being built the answer to a wrong tap that spelled a third piece, or leave that place empty when the tap was wrong for some other reason.";
  "It is one step rather than two because the place is emptied whether or not anything is said there. Said only when there is something to say, the sentence from the tap before would still be sitting there under a different mistake, reading as an answer to it.";
  html_clear(note_div);
  let parts = app_code_quiz_token_run_together_parts(
    chosen,
    token,
    tokens_unique,
  );
  let quiet = null_is(parts);
  if (quiet) {
    return;
  }
  html_spans_prose_code(note_div, parts);
}
