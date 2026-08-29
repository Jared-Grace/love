import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_verify_column_max_width } from "./app_g_verify_column_max_width.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_g_verify_home_header } from "./app_g_verify_home_header.mjs";
import { app_g_verify_home_asked_banner } from "./app_g_verify_home_asked_banner.mjs";
import { app_g_verify_home_busy_banner } from "./app_g_verify_home_busy_banner.mjs";
export function app_g_verify_home_wrap(
  root,
  chapter_codes,
  chapter_code,
  busy,
  status_shown,
  status_verse,
) {
  "The column everything on the verify page sits in, with the chapter chooser and the two banners already at the top of it.";
  "THE COLUMN IS HANDED BACK so the caller can go on putting the verses and the reading pane inside it.";
  arguments_assert(arguments, 6);
  let wrap = html_div(root);
  let style_value = app_g_verify_column_max_width();
  html_style_set(wrap, "max-width", style_value);
  html_style_margin(wrap, "0 auto");
  let edge_gap = app_shared_content_edge_gap();
  html_style_padding_x(wrap, edge_gap);
  html_style_padding_y(wrap, "2em");
  app_g_verify_home_header(wrap, chapter_codes, chapter_code);
  app_g_verify_home_asked_banner(wrap);
  app_g_verify_home_busy_banner(busy, status_shown, status_verse, wrap);
  return wrap;
}
