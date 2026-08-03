import { list_filter } from "./list_filter.mjs";
import { object_cartesian_product } from "./object_cartesian_product.mjs";
import { g_profile_valid_is } from "./g_profile_valid_is.mjs";
import { g_profile_axes } from "./g_profile_axes.mjs";
export function g_profiles() {
  "Every person the axes can describe who could actually have lived, as a list of objects.";
  "This is the deck. A game deals from it rather than rolling for each field, so the spread over a whole run is what was chosen rather than what chance gave.";
  let axes = g_profile_axes();
  let combinations = object_cartesian_product(axes);
  let valid = list_filter(combinations, g_profile_valid_is);
  return valid;
}
