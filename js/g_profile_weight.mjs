import { fn_name } from "./fn_name.mjs";
import { g_profile_target_shares } from "./g_profile_target_shares.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
export function g_profile_weight(profile) {
  "$plain profile";
  "How often one person in the deck should be met, as a number - the wanted share of every value they hold, multiplied together.";
  "The shares are written one axis at a time and a person holds one value on each axis, so multiplying is what turns a table of separate axes into a weight for a whole person. Somebody whose every value is common comes out large, somebody carrying one rare value comes out small, and a soldier who is also a woman comes out at neither share but at both.";
  ("Weighting the draw rather than pruning the deck is the decision ",
    fn_name("g_profile_target_shares"),
    " argues for at length. Every person who could have lived stays constructible, and only how often they are met changes - a share is corrected without deleting anybody who really lived.");
  ("Nothing is normalised here. The weights are only ever compared with each other inside one draw, so their scale never leaves this pair of functions and dividing by a total would be arithmetic nobody reads.");
  let shares = g_profile_target_shares();
  let names = object_property_names(shares);
  let weight = 1;
  for (let name of names) {
    let table = property_get(shares, name);
    let value = property_get(profile, name);
    let share = property_get(table, value);
    weight = multiply(weight, share);
  }
  return weight;
}
