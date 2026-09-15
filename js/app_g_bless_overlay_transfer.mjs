import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_street_start } from "./bless_street_start.mjs";
import { app_shared_game_overlay_container } from "./app_shared_game_overlay_container.mjs";
export function app_g_bless_overlay_transfer(r, tapped, container_map) {
  arguments_assert(arguments, 3);
  let render = property_get(r, "render");
  let world = property_get(r, "world");
  let div_map = property_get(r, "div_map");
  let player_img_c = property_get(r, "player_img_c");
  bless_street_start(
    container_map,
    world,
    div_map,
    player_img_c,
    tapped,
    render,
  );
  ("the world is built and drawn behind this before it is covered, so the first thing after the amen is a world already standing rather than a wait");
  let transfer = app_shared_game_overlay_container(container_map);
  return transfer;
}
