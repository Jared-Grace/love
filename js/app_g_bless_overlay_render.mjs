import { app_g_bless_overlay_render_tap_prayed } from "./app_g_bless_overlay_render_tap_prayed.mjs";
import { app_g_bless_overlay_render_view_now } from "./app_g_bless_overlay_render_view_now.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_overlay_render(r, npcs) {
  arguments_assert(arguments, 2);
  ("What is drawn every time the world moves, and what a tap on somebody does.");
  ("The two live together because they are the same closure: praying changes how far the");
  ("next prayer reaches, and that reach is a value neither of them could hold alone.");
  let div_map = property_get(r, "div_map");
  let wash = property_get(r, "wash");
  let player_img_c = property_get(r, "player_img_c");
  let glows = property_get(r, "glows");
  let r2 = app_g_bless_overlay_render_view_now(r, npcs);
  let view_now = property_get(r2, "view_now");
  let r4 = app_g_bless_overlay_render_tap_prayed(r2, view_now, glows, wash);
  let tap_prayed = property_get(r4, "tap_prayed");
  let render = property_get(r4, "render");
  let bar = property_get(r4, "bar");
  let world = property_get(r4, "world");
  let walking = property_get(r4, "walking");
  let r3 = {
    div_map,
    player_img_c,
    bar,
    world,
    walking,
    render,
    tap_prayed,
  };
  return r3;
}
