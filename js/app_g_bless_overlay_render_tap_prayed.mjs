import { property_get } from "./property_get.mjs";
import { app_g_bless_overlay_render_tap_prayed_tap_prayed } from "./app_g_bless_overlay_render_tap_prayed_tap_prayed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_overlay_render_tap_prayed(
  r2,
  view_now,
  glows,
  wash,
) {
  arguments_assert(arguments, 4);
  let r3 = app_g_bless_overlay_render_tap_prayed_tap_prayed(
    r2,
    glows,
    wash,
    view_now,
  );
  let tap_prayed = property_get(r3, "tap_prayed");
  let pray_person_id = property_get(r3, "pray_person_id");
  let render = property_get(r3, "render");
  let bar = property_get(r3, "bar");
  let world = property_get(r3, "world");
  let walking = property_get(r3, "walking");
  let r = {
    walking,
    world,
    bar,
    render,
    tap_prayed,
    pray_person_id,
  };
  return r;
}
