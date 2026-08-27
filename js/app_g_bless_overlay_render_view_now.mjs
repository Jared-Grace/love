import { app_g_bless_hold } from "./app_g_bless_hold.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_overlay_render_view_now(r, npcs) {
  arguments_assert(arguments, 2);
  let bar = property_get(r, "bar");
  let container_map = property_get(r, "container_map");
  let edge = property_get(r, "edge");
  let rung = property_get(r, "rung");
  let blessed = property_get(r, "blessed");
  ("The layer the lit houses are drawn on, and the blocks whose buildings they are. Both are");
  ("carried through here rather than fetched where they are used, because the drawing sits");
  ("inside the closure below and the closure can only see what this record hands it.");
  let homes = property_get(r, "homes");
  let blocks = property_get(r, "blocks");
  let cone_get = property_get(r, "cone_get");
  ("The grid the world is drawn on and the picture standing for the player are carried");
  ("through here as well. Nothing on this screen draws with them - they are what the CAMERA");
  ("needs, and the camera is moved from inside the closure below on the rare prayer that");
  ("finishes a whole house off. This record is the only way they can reach it.");
  let div_map = property_get(r, "div_map");
  let player_img_c = property_get(r, "player_img_c");
  let r2 = property_get(r, "r2");
  let world = property_get(r2, "world");
  let walking = property_get(r2, "walking");
  ("Who the player is HOLDING, and who they can see at this moment - one unit, because the");
  ("three of them are one piece of remembered state read three ways. What a hold is for,");
  ("and why it is taken when the player LOOKS rather than when they pray, is written where");
  ("it lives.");
  let holder = app_g_bless_hold(world, cone_get, npcs);
  let hold = property_get(holder, "hold");
  let hold_release = property_get(holder, "hold_release");
  let view_now = property_get(holder, "view_now");
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
    edge,
    div_map,
    player_img_c,
    rung,
    blessed,
    homes,
    blocks,
    cone_get,
    world,
    walking,
    view_now,
    view_everyone,
    hold,
    hold_release,
  };
  return r3;
}
