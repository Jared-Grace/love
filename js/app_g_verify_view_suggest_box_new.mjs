import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_view_label_new } from "./app_g_verify_view_label_new.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { property_get } from "./property_get.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { app_g_verify_suggestion_font_size } from "./app_g_verify_suggestion_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_g_verify_view_suggest_box_new(
  container,
  small_gap,
  lines,
  serif,
) {
  arguments_assert(arguments, 4);
  app_g_verify_view_label_new("SUGGEST AN EDIT", container, small_gap);
  let suggest_area = html_textarea(container);
  function lambda17(l) {
    let value = property_get(l, "text");
    return value;
  }
  let value4 = lines.map(lambda17).join("\n");
  html_value_set(suggest_area, value4);
  html_width_full(suggest_area);
  html_style_set(suggest_area, "min-height", "6em");
  html_style_set(suggest_area, "box-sizing", "border-box");
  ("prefer the browser's NATIVE content-sizing (field-sizing) — it grows the box to fit with zero JS and, crucially, zero FORCED REFLOW per keystroke; the JS height fallback below reads scrollHeight on every input, thrashing layout, which lags typing. Fall back to the JS path only where field-sizing is unsupported");
  let native_sizing = window.CSS.supports("field-sizing", "content");
  if (native_sizing) {
    html_style_set(suggest_area, "field-sizing", "content");
  } else {
    html_style_set(suggest_area, "overflow-y", "hidden");
  }
  html_font_set(suggest_area, serif);
  let value8 = app_g_verify_suggestion_font_size();
  html_style_font_size(suggest_area, value8);
  html_style_line_height(suggest_area, "1.5");
  html_style_margin_top(suggest_area, small_gap);
  ("keep an in-progress suggestion per verse across navigation, but ONLY while the underlying lines are unchanged; if the lines were updated the saved draft is stale, so drop it and show the fresh lines");
  let r = {
    suggest_area,
    value4,
    native_sizing,
  };
  return r;
}
