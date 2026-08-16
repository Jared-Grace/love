import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_milestone_background_color } from "./app_shared_milestone_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_g_verify_banner_font_size } from "./app_g_verify_banner_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function app_g_verify_home_busy_banner(
  busy,
  status_shown,
  status_verse,
  wrap,
) {
  arguments_assert(arguments, 4);
  if (busy) {
    let note = property_get(status_shown, "note");
    let text = "Claude is writing v" + status_verse + "…";
    if (note) {
      text = text + "  " + note;
    }
    let banner = html_p_text(wrap, text);
    let background = app_shared_milestone_background_color();
    html_style_background_color_set(banner, background);
    html_font_color_set(banner, "white");
    let border_radius = app_shared_border_radius();
    html_border_radius(banner, border_radius);
    html_style_padding_x(banner, "0.7em");
    let value = app_shared_spaced_small_gap();
    html_style_padding_y(banner, value);
    html_margin_em(banner, "0");
    let value3 = app_shared_spaced_small_gap();
    html_style_margin_top(banner, value3);
    let value9 = app_g_verify_banner_font_size();
    html_style_font_size(banner, value9);
  }
}
