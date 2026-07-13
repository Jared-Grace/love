import { html_mobile_default } from "./html_mobile_default.mjs";
import { html_hide_loadable } from "./html_hide_loadable.mjs";
import { g_icon_cross_unpositioned } from "./g_icon_cross_unpositioned.mjs";
import { html_scroll_none } from "./html_scroll_none.mjs";
import { html_div } from "./html_div.mjs";
import { app_g_player_style_initialize } from "./app_g_player_style_initialize.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_remix_icon } from "./html_remix_icon.mjs";
export function app_g_html_initialize(context) {
  let root = html_mobile_default(context);
  html_remix_icon();
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
  html_style_set(div_map_container, "height", "100vh");
  html_scroll_none(div_map_container);
  let i = g_icon_cross_unpositioned(root);
  html_hide_loadable(i);
  return div_map_container;
}
