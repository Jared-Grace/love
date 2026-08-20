import { bless_view_of_people } from "./bless_view_of_people.mjs";
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
  ("everybody on the street, whether the player is facing them or not - what the marks are");
  ("drawn from, while the cone above decides what may be prayed for.");
  ("Sight is what a prayer costs, and it is charged once, at the moment of praying. Whether");
  ("somebody has been prayed for is a fact about them and not about where the player is");
  ("looking now, so turning away cannot unsay it. Marking only the cone would charge the");
  ("cost again every time the player looked elsewhere, and the mark exists to be a map: walk");
  ("to the edge of your own work and the crowd goes dark, which is where to pray next. A map");
  ("that is only ever as wide as one glance shows no edge, because dark is what everywhere");
  ("already looks like.");
  ("Asked once rather than again per step, because who is on the street does not change -");
  ("only where they are standing, and each of them is read for that at the moment of drawing.");
  let view_everyone = bless_view_of_people(npcs);
  let r3 = {
    bar,
    container_map,
    rung,
    blessed,
    cone_get,
    world,
    walking,
    view_now,
    view_everyone,
  };
  return r3;
}
