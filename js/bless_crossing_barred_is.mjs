import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { bless_crossing_within_is } from "./bless_crossing_within_is.mjs";
export function bless_crossing_barred_is(world, vehicle, landing) {
  arguments_assert(arguments, 3);
  ("Answers whether the square a vehicle is about to move onto is inside a claimed");
  ("crossing. A vehicle barred this way waits where it is until the walker is across.");
  ("It asks about the square being moved ONTO and never about the one being left, which");
  ("is the whole difference between stopping short of somebody and stopping on them. A");
  ("vehicle already beside the band is free to drive away from it, because the square it");
  ("would land on is further off than the one it is leaving.");
  ("No claim is the ordinary answer and it is answered first, so a street with nobody");
  ("crossing it costs one comparison a tick and nothing else.");
  let crossing = property_get(world, "crossing");
  let unclaimed = null_is(crossing);
  if (unclaimed) {
    return false;
  }
  let row = property_get(vehicle, "y");
  let barred = bless_crossing_within_is(crossing, row, landing);
  return barred;
}
