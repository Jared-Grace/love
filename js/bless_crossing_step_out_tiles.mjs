import { arguments_assert } from "./arguments_assert.mjs";
import { bless_crossing_clearance_tiles } from "./bless_crossing_clearance_tiles.mjs";
import { add } from "./add.mjs";
export function bless_crossing_step_out_tiles() {
  arguments_assert(arguments, 0);
  ("How much road has to look empty before she steps off the kerb, in squares.");
  ("One square wider than the band vehicles are held out of, and the extra square is");
  ("there for a reason a grid cannot see: a vehicle is DRAWN sliding from the square it");
  ("left to the square it now counts as being on. For most of that slide it is standing");
  ("across the line between the two. So the square behind a vehicle is not empty road,");
  ("it is road with a car still halfway over it, and a walker who steps out the moment");
  ("the numbers say clear walks out in front of something still visibly in her way.");
  ("Held-back traffic does not need the extra square, because a vehicle held back never");
  ("starts its slide at all - it is standing still on a square it fully occupies. That");
  ("is why this is its own number rather than a bigger clearance: raising the clearance");
  ("would stop the traffic a square further back than anybody asked for, to buy a margin");
  ("only the walker's own decision ever needed.");
  let clearance = bless_crossing_clearance_tiles();
  let tiles = add(clearance, 1);
  return tiles;
}
