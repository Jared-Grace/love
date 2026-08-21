import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_arrows } from "./app_g_bless_arrows.mjs";
import { app_shared_game_event_target_closest_tile } from "./app_shared_game_event_target_closest_tile.mjs";
import { not } from "./not.mjs";
import { app_g_tile_coordinates_get } from "./app_g_tile_coordinates_get.mjs";
import { app_g_bless_walk } from "./app_g_bless_walk.mjs";
export function app_g_bless_overlay_tapped(r) {
  arguments_assert(arguments, 1);
  let turned = property_get(r, "turned");
  let div_map = property_get(r, "div_map");
  let player_img_c = property_get(r, "player_img_c");
  let bar = property_get(r, "bar");
  let world = property_get(r, "world");
  let walking = property_get(r, "walking");
  let render = property_get(r, "render");
  let tap_prayed = property_get(r, "tap_prayed");
  let player = property_get(r, "player");
  app_g_bless_arrows(bar, turned);
  async function tapped(e) {
    "a tap while already walking is ignored rather than queued. the player can see where they are going, and a second destination taken mid-walk would send them somewhere they chose before they knew what the first walk would show them";
    if (walking) {
      return;
    }
    let tile = app_shared_game_event_target_closest_tile(e);
    if (not(tile)) {
      return;
    }
    let target = app_g_tile_coordinates_get(tile);
    ("one tap and two verbs, told apart by what is standing there: somebody the player can");
    ("see is prayed for, and everything else is walked to. Nothing has to be chosen from a");
    ("menu first, and a tap on a person too far off to see is not refused - it walks the");
    ("player toward them, which is how they come to be seen.");
    let prayed = tap_prayed(target);
    if (prayed) {
      return;
    }
    walking = true;
    await app_g_bless_walk(world, target, player_img_c, div_map, render);
    walking = false;
    render();
  }
  let r2 = {
    div_map,
    player_img_c,
    render,
    player,
    world,
    tapped,
  };
  return r2;
}
