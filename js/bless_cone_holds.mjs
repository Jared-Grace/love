import { and } from "./and.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { bless_cone_ahead_across } from "./bless_cone_ahead_across.mjs";
export function bless_cone_holds(cone, x, y) {
  "Whether a tile is one the player can see from where they are looking.";
  "PURE arithmetic over the grid, with nothing measured off a page - so it answers the";
  "same for a map drawn as tiles, a map drawn in 3-D, and a map never drawn at all.";
  "It widens by one tile for every tile of distance, which is a quarter turn either side of";
  "straight ahead - about what a person takes in without moving their head, and wide enough";
  "that a crowd fills it rather than a single file.";
  "The tile the player stands on is NOT in it. You are not among the people you are";
  "blessing, and a cone that started at zero would quietly count the player.";
  let r = bless_cone_ahead_across(cone, x, y);
  let ahead = property_get(r, "ahead");
  let across = property_get(r, "across");
  let started = greater_than_equal(ahead, 1);
  let depth = property_get(cone, "depth");
  let reachable = less_than_equal(ahead, depth);
  let inside = less_than_equal(across, ahead);
  let left = and(started, reachable);
  let holds = and(left, inside);
  return holds;
}
