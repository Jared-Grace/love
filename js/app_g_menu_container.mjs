import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
export function app_g_menu_container(overlay) {
  ("clear the overlay and place one ",
    fn_name("app_g_container_player"),
    " card directly in it — the same card + tight button spacing as the prayer turn. the overlay itself (the prayer-menu wrapper) centers the card in the viewport, so no extra centering column is needed. returns the card to append the heading and buttons into; shared by the top menu and its pray sub-screen so every menu screen centers identically.");
  html_clear(overlay);
  let container = app_g_container_player(overlay);
  return container;
}
