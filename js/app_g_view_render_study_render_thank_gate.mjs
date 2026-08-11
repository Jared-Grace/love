import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { g_prayer_study_after } from "./g_prayer_study_after.mjs";
import { app_g_prayer_study_overlay } from "./app_g_prayer_study_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
export function app_g_view_render_study_render_thank_gate(
  persist_cancel,
  container,
  close,
) {
  arguments_assert(arguments, 3);
  persist_cancel();
  html_clear(container);
  function thank() {
    let prayer = g_prayer_study_after();
    app_g_prayer_study_overlay(prayer, close);
  }
  let left = emoji_pray();
  let label = text_combine(left, " Thank God, then finish");
  app_g_button_green(container, label, thank);
}
