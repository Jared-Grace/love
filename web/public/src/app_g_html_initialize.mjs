import { html_hide_loadable } from "../../../love/public/src/html_hide_loadable.mjs";
import { g_icon_cross_unpositioned } from "../../../love/public/src/g_icon_cross_unpositioned.mjs";
import { html_scroll_none } from "../../../love/public/src/html_scroll_none.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_g_player_style_initialize } from "../../../love/public/src/app_g_player_style_initialize.mjs";
import { html_style_overflow_hidden } from "../../../love/public/src/html_style_overflow_hidden.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_remix_icon } from "../../../love/public/src/html_remix_icon.mjs";
import { html_font_sans_serif_set_html } from "../../../love/public/src/html_font_sans_serif_set_html.mjs";
import { html_meta_viewport } from "../../../love/public/src/html_meta_viewport.mjs";
export function app_g_html_initialize(context) {
  html_meta_viewport();
  html_font_sans_serif_set_html();
  html_remix_icon();
  let root = property_get(context, "root");
  html_style_assign(root, {
    "font-size": "18px",
    margin: "0",
    padding: 0,
    height: "100%",
  });
  html_style_overflow_hidden(root);
  app_g_player_style_initialize();
  let div_map_container = html_div(root);
  html_style_assign(div_map_container, {
    position: "relative",
    overflow: "auto",
    width: "100%",
    "pointer-events": "auto",
  });
  ("this was needed instead of 100% to allow vertical scrolling");
  html_style_assign(div_map_container, {
    height: "100vh",
  });
  html_scroll_none(div_map_container);
  let i = g_icon_cross_unpositioned(root);
  html_hide_loadable(i);
  return div_map_container;
}
