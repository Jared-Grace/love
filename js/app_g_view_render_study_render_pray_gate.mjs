import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { g_prayer_study_before } from "./g_prayer_study_before.mjs";
import { app_g_prayer_study_overlay } from "./app_g_prayer_study_overlay.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
export function app_g_view_render_study_render_pray_gate(
  container,
  render_words,
) {
  arguments_assert(arguments, 2);
  html_clear(container);
  function begin() {
    let prayer = g_prayer_study_before();
    app_g_prayer_study_overlay(prayer, render_words);
  }
  let left = emoji_pray();
  let label = text_combine(left, " Pray and study");
  app_g_button_green(container, label, begin);
}
