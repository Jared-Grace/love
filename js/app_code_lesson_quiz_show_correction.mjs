import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { html_size_change_animate } from "./html_size_change_animate.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_opacity_animate } from "./html_opacity_animate.mjs";
export async function app_code_lesson_quiz_show_correction(
  container_correction,
) {
  arguments_assert(arguments, 1);
  ("2026-10-23, at the human's asking: the correction's room opens slowly from nothing, and only once it is open does the correction fade in, so nothing on the screen arrives at once. The opening is the one every height change in this app is made by");
  function room_open() {
    html_display_block(container_correction);
  }
  let duration = app_shared_animation_duration();
  await html_size_change_animate(
    container_correction,
    "height",
    container_correction,
    room_open,
    duration,
  );
  ("what overflows was hidden only for the opening; left hidden, it would cut off the glow on the next press to make");
  html_style_set(container_correction, "overflow", "");
  await html_opacity_animate(container_correction, "1", duration);
}
