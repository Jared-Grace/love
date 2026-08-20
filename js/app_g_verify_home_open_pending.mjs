import { arguments_assert } from "./arguments_assert.mjs";
import { storage_session_specify_set } from "./storage_session_specify_set.mjs";
import { app_g_verify_home_highlight_selected } from "./app_g_verify_home_highlight_selected.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_g_verify_waiting_font_size } from "./app_g_verify_waiting_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_g_verify_home_open_pending(
  verse,
  selected_key,
  storage_key,
  verse_buttons,
  view,
) {
  arguments_assert(arguments, 5);
  selected_key = verse;
  storage_session_specify_set(storage_key, verse);
  app_g_verify_home_highlight_selected(selected_key, verse_buttons);
  html_clear(view);
  let msg = html_p_text(view, "Claude is writing v" + verse + "…");
  app_shared_text_deemphasized(msg);
  let value = app_g_verify_waiting_font_size();
  html_style_font_size(msg, value);
  html_style_margin_top(msg, "1em");
  let r = {
    selected_key,
  };
  return r;
}
