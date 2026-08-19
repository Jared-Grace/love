import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
export function app_g_bless_overlay_render_view_now(r, npcs) {
  arguments_assert(arguments, 2);
  let bar = property_get(r, "bar");
  let container_map = property_get(r, "container_map");
  let rung = property_get(r, "rung");
  let blessed = property_get(r, "blessed");
  let cone_get = property_get(r, "cone_get");
  let r2 = property_get(r, "r2");
  let world = property_get(r2, "world");
  let walking = property_get(r2, "walking");
  function view_now() {
    "who the player can see AT THIS MOMENT, asked again rather than remembered, because the";
    "crowd walks between one question and the next";
    let cone = cone_get();
    let view = bless_cone_view(cone, npcs);
    return view;
  }
  let r3 = {
    bar,
    container_map,
    rung,
    blessed,
    cone_get,
    world,
    walking,
    view_now,
  };
  return r3;
}
