import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
export function app_g_menu_container(overlay) {
  ("clear the overlay and build the tap-yourself menu's frame: one ",
    fn_name("app_g_container_player"),
    " card (the same card + tight button spacing as the conversation / prayer screens) wrapped in a VERTICALLY-CENTERED column, so the options meet the eye where the map was tapped. returns the card to append the heading and buttons into. shared by the top menu and its pray sub-screen so every menu screen centers identically.");
  html_clear(overlay);
  let column = html_div(overlay);
  html_style_assign(column, {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "min-height": "100%",
    "box-sizing": "border-box",
  });
  let container = app_g_container_player(column);
  return container;
}
