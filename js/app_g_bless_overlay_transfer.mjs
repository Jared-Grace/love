import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_on } from "./html_on.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_overlay_container } from "./app_g_overlay_container.mjs";
export function app_g_bless_overlay_transfer(r, tapped, container_map) {
  arguments_assert(arguments, 3);
  let player = property_get(r, "player");
  let render = property_get(r, "render");
  let player_img_c = property_get(r, "player_img_c");
  let div_map = property_get(r, "div_map");
  html_on(div_map, "click", tapped);
  render();
  app_g_player_center(player, player_img_c, div_map);
  ("the world is built and drawn behind this before it is covered, so the first thing after the amen is a world already standing rather than a wait");
  let transfer = app_g_overlay_container(container_map);
  return transfer;
}
