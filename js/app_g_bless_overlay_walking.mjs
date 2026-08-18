import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_overlay_blessings } from "./app_g_bless_overlay_blessings.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_overlay_walking(container_map) {
  arguments_assert(arguments, 1);
  let r = app_g_bless_overlay_blessings(container_map);
  let blessings = property_get(r, "blessings");
  let unlocked = property_get(r, "unlocked");
  let told = property_get(r, "told");
  let bar = property_get(r, "bar");
  let glows = property_get(r, "glows");
  let player_img_c = property_get(r, "player_img_c");
  let wash = property_get(r, "wash");
  let div_map = property_get(r, "div_map");
  let street = property_get(r, "street");
  let npcs = property_get(r, "npcs");
  let player = property_get(r, "player");
  let world = property_get(r, "world");
  let walking = false;
  let r2 = {
    blessings,
    unlocked,
    told,
    bar,
    glows,
    player_img_c,
    wash,
    div_map,
    street,
    npcs,
    player,
    world,
    walking,
  };
  return r2;
}
