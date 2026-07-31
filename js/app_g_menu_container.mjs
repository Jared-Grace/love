import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_menu_container(overlay) {
  ("clear the overlay and build a MENU screen's frame: a VERTICALLY-CENTERED column of full-width rows, so the options meet the eye where the map was tapped. this is the MENU's own look — a heading card (",
    fn_name("app_g_container_text"),
    ") over bare buttons, spaced by the column's own gap — and deliberately NOT the ",
    fn_name("app_g_container_player"),
    " card the conversation / prayer TURNS wear: a turn is a person speaking to you inside a conversation, a menu is the game asking what you want to do. returns the column to append the heading and buttons into; shared by the top menu and its pray sub-screen so every menu screen looks identical.");
  html_clear(overlay);
  let column = html_div(overlay);
  html_style_assign(column, {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "stretch",
    gap: "0.6rem",
    "min-height": "100%",
    "box-sizing": "border-box",
  });
  return column;
}
