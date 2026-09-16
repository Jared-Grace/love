import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_road_same_is } from "./bless_road_same_is.mjs";
import { not } from "./not.mjs";
import { bless_vehicle_length_tiles } from "./bless_vehicle_length_tiles.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
export function bless_crossing_within_is(crossing, row, at, tiles) {
  arguments_assert(arguments, 4);
  ("Answers whether a car standing on a given square comes closer to a walker's crossing");
  ("than the given number of clear squares. The square handed in is always a car's, either");
  ("the one it is on or the one it is about to reach.");
  ("The street is asked first and answers no nearly every time. A town has several roads");
  ("and they all run through the same columns, so a vehicle miles away on another street");
  ("shares the crossing's column exactly as often as the one bearing down on her does.");
  ("Asking only the column would stop the whole town's traffic every time somebody");
  ("stepped off a kerb.");
  ("What is measured is the car's BODY, not the square it is recorded on, and that is the");
  ("whole of the difference between a rule that looks right and one that looks right only");
  ("from the east. A car is drawn two squares long and its picture starts at the square it");
  ("stands on, so a car west of the crossing reaches one square nearer than its number says");
  ("and a car east of it does not. Measured by the number alone, the same held-back");
  ("distance leaves a clear square on one side and a car touching the crossing on the");
  ("other.");
  ("So both edges are worked out and the nearer one decides. A car west of the crossing is");
  ("measured from its nose, which is its own square plus its length; a car east of it is");
  ("measured from its tail, which is the square it stands on, against the far side of the");
  ("crossing square. Whichever leaves more clear road between the two is the one that is");
  ("true, because the other is the gap measured straight through the car.");
  ("The count is CLEAR SQUARES BETWEEN rather than a distance between two numbers. One");
  ("means what a person watching means by it - how much empty road there is - and the other");
  ("counts the car's own length as though it were road.");
  ("HOW MANY belongs to the caller, because the two callers are asking about different");
  ("moments and honestly want different answers. Holding a vehicle back is about where it");
  ("is ABOUT TO BE, which is a square it has not reached yet; deciding the road looks empty");
  ("enough to step onto is about where everything is DRAWN, and a vehicle that has just");
  ("left a square is still drawn halfway across it.");
  ("One place answers the question for both, because the two have to agree about what a");
  ("band IS - the same street, measured the same way along it. Written twice they would");
  ("drift, and the drift would show up as a vehicle entering ground she was promised.");
  let row_crossing = property_get(crossing, "y");
  let here = bless_road_same_is(row_crossing, row);
  let elsewhere = not(here);
  if (elsewhere) {
    return false;
  }
  let at_crossing = property_get(crossing, "x");
  let length = bless_vehicle_length_tiles();
  let nose = add(at, length);
  let behind = subtract(at_crossing, nose);
  let far_side = add(at_crossing, 1);
  let ahead = subtract(at, far_side);
  let gap = behind;
  let east_side = greater_than(ahead, behind);
  if (east_side) {
    gap = ahead;
  }
  let within = less_than(gap, tiles);
  return within;
}
