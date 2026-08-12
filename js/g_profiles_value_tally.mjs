import { g_profile_axes } from "./g_profile_axes.mjs";
import { g_profiles } from "./g_profiles.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function g_profiles_value_tally() {
  "How many of the dealt people hold each value of each axis, so what a choice is worth can be read before it is added or dropped.";
  "A value's count IS what dropping it would cost, exactly - the people holding it are the people who would stop existing. So this is the instrument for asking whether a choice is needed, and multiplying the axes out is not: the sieve removes combinations unevenly, so a value that looks like a quarter of an axis is never a quarter of the deck.";
  "It is read-only and derives its own axes, so a value added or removed shows up here without this being touched.";
  let axes = g_profile_axes();
  let deck = g_profiles();
  let names = object_property_names(axes);
  let r = {};
  function tally_axis(name) {
    let held = list_map_property(deck, name);
    let counts = list_tally(held);
    property_set(r, name, counts);
  }
  each(names, tally_axis);
  return r;
}
