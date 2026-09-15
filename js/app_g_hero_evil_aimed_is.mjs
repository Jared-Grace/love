import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function app_g_hero_evil_aimed_is(evil, target) {
  arguments_assert(arguments, 2);
  ("Whether a tap on this square is a tap on the evil person.");
  ("A square either side counts, because they are usually walking, and a finger aimed at somebody mid-step lands on the square they left or the one they are reaching as often as on the one they are named at.");
  if (null_is(evil)) {
    return false;
  }
  let apart = g_distance_taxicab(evil, target);
  let aimed = less_than_equal(apart, 1);
  return aimed;
}
