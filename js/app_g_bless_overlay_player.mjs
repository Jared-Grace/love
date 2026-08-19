import { app_g_bless_overlay_blessed } from "./app_g_bless_overlay_blessed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_overlay_cone_get } from "./app_g_bless_overlay_cone_get.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_overlay_player(container_map) {
  arguments_assert(arguments, 1);
  let r4 = app_g_bless_overlay_blessed(container_map);
  let blessed2 = property_get(r4, "blessed");
  let rung2 = property_get(r4, "rung");
  let told2 = property_get(r4, "told");
  let bar2 = property_get(r4, "bar");
  let glows2 = property_get(r4, "glows");
  let player_img_c2 = property_get(r4, "player_img_c");
  let wash2 = property_get(r4, "wash");
  let div_map2 = property_get(r4, "div_map");
  let street2 = property_get(r4, "street");
  let npcs2 = property_get(r4, "npcs");
  let player2 = property_get(r4, "player");
  let world = property_get(r4, "world");
  let walking = false;
  let r22 = {
    container_map,
    blessed: blessed2,
    rung: rung2,
    told: told2,
    bar: bar2,
    glows: glows2,
    player_img_c: player_img_c2,
    wash: wash2,
    div_map: div_map2,
    street: street2,
    npcs: npcs2,
    player: player2,
    world,
    walking,
  };
  let r = r22;
  let r2 = app_g_bless_overlay_cone_get(r);
  let cone_get = property_get(r2, "cone_get");
  let blessed = property_get(r2, "blessed");
  let rung = property_get(r2, "rung");
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
    container_map,
    cone_get,
    blessed,
    rung,
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
