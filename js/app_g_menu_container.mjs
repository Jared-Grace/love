import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_g_menu_container(overlay) {
  ("clear the overlay and return it as a MENU screen's frame: a plain block, TOP-anchored, adding NO spacing of its own. that last part is the whole point — every control already carries ",
    fn_name("app_shared_margin_y"),
    " from ",
    fn_name("app_shared_style_control"),
    ", and as plain blocks those margins collapse to exactly one gap between neighbours. so a menu's buttons sit as tightly as the prayer TURN's do, from the same single source, rather than from a menu-only flex gap stacked on top of the shared margin. this is the MENU's own look — a heading card (",
    fn_name("app_g_container_text"),
    ") over bare buttons — and deliberately NOT the ",
    fn_name("app_g_container_player"),
    " card the conversation / prayer TURNS wear: a turn is a person speaking to you inside a conversation, a menu is the game asking what you want to do. shared by the top menu and its pray sub-screen so every menu screen looks identical.");
  html_clear(overlay);
  return overlay;
}
