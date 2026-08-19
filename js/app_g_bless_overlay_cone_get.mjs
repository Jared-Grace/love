import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_depth_start } from "./bless_depth_start.mjs";
import { bless_cone } from "./bless_cone.mjs";
export function app_g_bless_overlay_cone_get(r) {
  arguments_assert(arguments, 1);
  let walking = property_get(r, "walking");
  let world = property_get(r, "world");
  let player = property_get(r, "player");
  let npcs = property_get(r, "npcs");
  let block = property_get(r, "block");
  let div_map = property_get(r, "div_map");
  let wash = property_get(r, "wash");
  let player_img_c = property_get(r, "player_img_c");
  let glows = property_get(r, "glows");
  let bar = property_get(r, "bar");
  let told = property_get(r, "told");
  let rung = property_get(r, "rung");
  let blessed = property_get(r, "blessed");
  let container_map = property_get(r, "container_map");
  function cone_get() {
    let x = property_get(player, "x");
    let y = property_get(player, "y");
    let direction = property_get(player, "direction");
    let depth = bless_depth_start();
    let cone = bless_cone(x, y, direction, depth);
    return cone;
  }
  let r2 = {
    walking,
    world,
    player,
    npcs,
    block,
    div_map,
    wash,
    player_img_c,
    glows,
    bar,
    told,
    rung,
    blessed,
    container_map,
    cone_get,
  };
  return r2;
}
