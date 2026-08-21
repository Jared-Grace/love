import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_overlay_player } from "./app_g_bless_overlay_player.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_overlay_render } from "./app_g_bless_overlay_render.mjs";
import { app_shared_game_character_face } from "./app_shared_game_character_face.mjs";
export function app_g_bless_overlay_turned(container_map) {
  arguments_assert(arguments, 1);
  let r = app_g_bless_overlay_player(container_map);
  let player = property_get(r, "player");
  let npcs = property_get(r, "npcs");
  let r2 = app_g_bless_overlay_render(r, npcs);
  let render = property_get(r2, "render");
  let tap_prayed = property_get(r2, "tap_prayed");
  let walking = property_get(r2, "walking");
  let world = property_get(r2, "world");
  let bar = property_get(r2, "bar");
  let player_img_c = property_get(r2, "player_img_c");
  let div_map = property_get(r2, "div_map");
  function turned(way) {
    app_shared_game_character_face(player, player_img_c, way);
    render();
  }
  let r3 = {
    player,
    render,
    tap_prayed,
    walking,
    world,
    bar,
    player_img_c,
    div_map,
    turned,
  };
  return r3;
}
