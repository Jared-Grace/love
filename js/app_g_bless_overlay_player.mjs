import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_overlay_walking } from "./app_g_bless_overlay_walking.mjs";
import { app_g_bless_overlay_cone_get } from "./app_g_bless_overlay_cone_get.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_overlay_player(container_map) {
  arguments_assert(arguments, 1);
  let r = app_g_bless_overlay_walking(container_map);
  let r2 = app_g_bless_overlay_cone_get(r);
  let cone_get = property_get(r2, "cone_get");
  let blessings = property_get(r2, "blessings");
  let unlocked = property_get(r2, "unlocked");
  let told = property_get(r2, "told");
  let bar = property_get(r2, "bar");
  let glows = property_get(r2, "glows");
  let player_img_c = property_get(r2, "player_img_c");
  let wash = property_get(r2, "wash");
  let div_map = property_get(r2, "div_map");
  let street = property_get(r2, "street");
  let npcs = property_get(r2, "npcs");
  let player = property_get(r2, "player");
  let r3 = {
    r2,
    cone_get,
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
  };
  return r3;
}
