import { abs } from "./abs.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { negative } from "./negative.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function bless_cone_holds(cone, x, y) {
  "Whether a tile is one the player can see from where they are looking.";
  "PURE arithmetic over the grid, with nothing measured off a page - so it answers the";
  "same for a map drawn as tiles, a map drawn in 3-D, and a map never drawn at all.";
  "It widens by one tile for every tile of distance, which is a quarter turn either side of";
  "straight ahead - about what a person takes in without moving their head, and wide enough";
  "that a crowd fills it rather than a single file.";
  "The tile the player stands on is NOT in it. You are not among the people you are";
  "blessing, and a cone that started at zero would quietly count the player.";
  let right = property_get(cone, "x");
  let dx = subtract(x, right);
  let right2 = property_get(cone, "y");
  let dy = subtract(y, right2);
  let direction = property_get(cone, "direction");
  let ahead = dy;
  let across = abs(dx);
  if (equal(direction, "north")) {
    ahead = negative(dy);
  }
  if (equal(direction, "east")) {
    ahead = dx;
    across = abs(dy);
  }
  if (equal(direction, "west")) {
    ahead = negative(dx);
    across = abs(dy);
  }
  let started = greater_than_equal(ahead, 1);
  let b = property_get(cone, "depth");
  let reachable = less_than_equal(ahead, b);
  let inside = less_than_equal(across, ahead);
  let left = and(started, reachable);
  let holds = and(left, inside);
  return holds;
}
