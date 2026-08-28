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
  let homes = property_get(r2, "homes");
  let blocks = property_get(r2, "blocks");
  let { bar, render, pray_person_id, tap_prayed } =
    app_g_bless_overlay_render_tap_prayed_tap_prayed(
      r2,
      glows,
      homes,
      blocks,
      blessed,
      cone_get,
      wash,
      view_now,
    );
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
