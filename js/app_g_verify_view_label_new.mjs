import { arguments_assert } from "./arguments_assert.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_category_color } from "./app_shared_text_category_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_g_verify_label_font_size } from "./app_g_verify_label_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_g_verify_view_label_new(caption, container, small_gap) {
  arguments_assert(arguments, 3);
  let l = html_p_text(container, caption);
  let color = app_shared_text_category_color();
  html_font_color_set(l, color);
  let value = app_g_verify_label_font_size();
  html_style_font_size(l, value);
  html_style_set(l, "letter-spacing", "0.11em");
  html_bold_semi(l);
  html_margin_em(l, "0");
  html_style_margin_top(l, small_gap);
}
