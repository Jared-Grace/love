import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_game_event_target_closest_tile } from "./app_shared_game_event_target_closest_tile.mjs";
import { not } from "./not.mjs";
import { app_shared_game_tile_coordinates_get } from "./app_shared_game_tile_coordinates_get.mjs";
import { app_g_hero_evil_aimed_is } from "./app_g_hero_evil_aimed_is.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_hero_burn } from "./app_g_hero_burn.mjs";
import { bless_walk } from "./bless_walk.mjs";
export function app_g_hero_tapped(hero) {
  arguments_assert(arguments, 1);
  ("One tap, two verbs, told apart by what is standing there: the evil person is burned, and everywhere else is walked to.");
  ("Nothing else is taken while either is happening, so a second tap cannot start a walk halfway through the fire or a second fireball halfway through a walk.");
  let world = property_get(hero, "world");
  let div_map = property_get(hero, "div_map");
  let player_img_c = property_get(hero, "player_img_c");
  let render = property_get(hero, "render");
  async function tapped(e) {
    let busy = property_get(hero, "busy");
    if (busy) {
      return;
    }
    let tile = app_shared_game_event_target_closest_tile(e);
    if (not(tile)) {
      return;
    }
    let target = app_shared_game_tile_coordinates_get(tile);
    let evil = app_g_hero_killer(hero);
    let aimed = app_g_hero_evil_aimed_is(evil, target);
    property_set(hero, "busy", true);
    if (aimed) {
      await app_g_hero_burn(hero);
    } else {
      await bless_walk(world, target, player_img_c, div_map, render);
    }
    property_set(hero, "busy", false);
    render();
  }
  return tapped;
}
