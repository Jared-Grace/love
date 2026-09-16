import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_road_same_is } from "./bless_road_same_is.mjs";
import { not } from "./not.mjs";
import { number_within_is } from "./number_within_is.mjs";
export function bless_crossing_within_is(crossing, row, at, tiles) {
  arguments_assert(arguments, 4);
  ("Answers whether a square is inside a band of road around a walker's crossing: the");
  ("same street, and no further along it than the given number of squares.");
  ("The street is asked first and answers no nearly every time. A town has several roads");
  ("and they all run through the same columns, so a vehicle miles away on another street");
  ("shares the crossing's column exactly as often as the one bearing down on her does.");
  ("Asking only the column would stop the whole town's traffic every time somebody");
  ("stepped off a kerb.");
  ("HOW WIDE the band is belongs to the caller, because the two callers are asking about");
  ("different moments and honestly want different answers. Holding a vehicle back is");
  ("about where it is ABOUT TO BE, which is a square it has not reached yet; deciding the");
  ("road looks empty enough to step onto is about where everything is DRAWN, and a");
  ("vehicle that has just left a square is still drawn halfway across it. One number");
  ("serving both would have to be the larger, and the traffic would then stop further");
  ("back than anybody chose.");
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
  let within = number_within_is(at, at_crossing, tiles);
  return within;
}
