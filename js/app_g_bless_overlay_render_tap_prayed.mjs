import { app_g_bless_overlay_render_tap_prayed_tap_prayed } from "./app_g_bless_overlay_render_tap_prayed_tap_prayed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_overlay_render_tap_prayed(
  r2,
  view_now,
  glows,
  wash,
) {
  arguments_assert(arguments, 4);
  let walking = property_get(r2, "walking");
  let world = property_get(r2, "world");
  let cone_get = property_get(r2, "cone_get");
  let blessed = property_get(r2, "blessed");
  let r3 = app_g_bless_overlay_render_tap_prayed_tap_prayed(
    r2,
    glows,
    blessed,
    cone_get,
    wash,
    view_now,
  );
  let tap_prayed = property_get(r3, "tap_prayed");
  let pray_person_id = property_get(r3, "pray_person_id");
  let render = property_get(r3, "render");
  let bar = property_get(r3, "bar");
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
