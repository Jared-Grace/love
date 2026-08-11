import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
export function app_code_lesson_quiz_render_correction(
  container_correction,
  correction_render,
  qa,
) {
  arguments_assert(arguments, 3);
  ("render the correction for the current question but keep it INVISIBLE (visibility hidden, still occupying its grid cell in the feedback slot) so the slot always reserves the taller of correction-or-success and NOTHING shifts when Show me the answer swaps the success message for it");
  html_clear(container_correction);
  correction_render(container_correction, qa);
  html_visibility_hidden(container_correction);
}
