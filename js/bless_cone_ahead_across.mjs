import { abs } from "./abs.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { negative } from "./negative.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function bless_cone_ahead_across(cone, x, y) {
  arguments_assert(arguments, 3);
  ("Where a tile sits relative to the way the player is facing - how many rows AHEAD of");
  ("them it is, and how far ACROSS from straight ahead.");
  ("Turning the grid so that forward is forward is the one piece of arithmetic every");
  ("question about the cone begins with, and it is the only piece that has to know which of");
  ("the four ways the player is facing. Whether a tile is inside the cone, and which row of");
  ("it a tile is in, are then both plain comparisons on these two numbers.");
  ("Ahead can be NEGATIVE, for a tile behind the player, and that is left as it is rather");
  ("than refused - what to do about a tile behind you is the caller's question, not this");
  ("one's. Across is a distance and so never is.");
  ("Nothing here is measured off the page, so it answers the same for a map drawn as tiles,");
  ("a map drawn in 3-D, and a map never drawn at all.");
  let cone_x = property_get(cone, "x");
  let dx = subtract(x, cone_x);
  let cone_y = property_get(cone, "y");
  let dy = subtract(y, cone_y);
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
  let r = {
    ahead: ahead,
    across: across,
  };
  return r;
}
