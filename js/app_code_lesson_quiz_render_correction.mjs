import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function app_code_lesson_quiz_render_correction(
  container_correction,
  correction_render,
  qa,
) {
  arguments_assert(arguments, 3);
  ("render the correction for the current question but keep it INVISIBLE and taking no room, until Show me the answer opens it");
  ("2026-10-23, at the human's asking: the correction takes up no space until it is asked for, then its room opens slowly and it fades in. Not kept: reserving its room from the start so nothing moved, which left a step quiz's long list of presses as a wide blank under every question");
  html_clear(container_correction);
  correction_render(container_correction, qa);
  html_visibility_hidden(container_correction);
  html_display_none(container_correction);
  html_style_opacity(container_correction, "0");
}
