import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_code_lesson_quiz_correction_redraw(
  container_correction,
  correction_render,
  qa,
) {
  arguments_assert(arguments, 3);
  ("draw the correction again, over whatever was drawn there before, leaving it exactly as visible or as hidden as it already was");
  ("Drawn again because the answer it holds has changed - the learner has narrowed a question down and the wording being aimed at is no longer the one on screen. Whether it is being LOOKED at is a separate matter, decided by the learner having asked or not asked, so this leaves it alone: a redraw that hid it would take the answer back off a learner who had just asked to see it, on their very next correct tap.");
  html_clear(container_correction);
  correction_render(container_correction, qa);
}
