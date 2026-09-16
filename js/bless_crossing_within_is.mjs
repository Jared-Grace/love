import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_road_same_is } from "./bless_road_same_is.mjs";
import { not } from "./not.mjs";
import { bless_crossing_clearance_tiles } from "./bless_crossing_clearance_tiles.mjs";
import { number_within_is } from "./number_within_is.mjs";
export function bless_crossing_within_is(crossing, row, at) {
  arguments_assert(arguments, 3);
  ("Answers whether a square is inside the band of road a walker has claimed for her");
  ("crossing: the same street, and no further along it than the clearance allows.");
  ("The street is asked first and answers no nearly every time. A town has several roads");
  ("and they all run through the same columns, so a vehicle miles away on another street");
  ("shares the crossing's column exactly as often as the one bearing down on her does.");
  ("Asking only the column would stop the whole town's traffic every time somebody");
  ("stepped off a kerb.");
  ("One place answers this for both halves of the protocol - whether the road is clear");
  ("enough to claim, and whether a vehicle may take its next square - because the two");
  ("have to mean the SAME band. Written twice they would drift, and the drift would show");
  ("up as a vehicle that was allowed to enter a band she was promised was empty.");
  let row_crossing = property_get(crossing, "y");
  let here = bless_road_same_is(row_crossing, row);
  let elsewhere = not(here);
  if (elsewhere) {
    return false;
  }
  let at_crossing = property_get(crossing, "x");
  let clearance = bless_crossing_clearance_tiles();
  let within = number_within_is(at, at_crossing, clearance);
  return within;
}
