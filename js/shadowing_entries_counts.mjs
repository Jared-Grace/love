import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
export function shadowing_entries_counts(entries) {
  "how many functions break each of the two name rules — the two numbers that say whether the ratchet is tightening";
  let bound_twice = 0;
  let shadows_function = 0;
  function count(entry) {
    let duplicated = property_get(entry, "duplicated");
    let shadowed = property_get(entry, "shadowed");
    let any_duplicated = greater_than(duplicated.length, 0);
    if (any_duplicated) {
      bound_twice = bound_twice + 1;
    }
    let any_shadowed = greater_than(shadowed.length, 0);
    if (any_shadowed) {
      shadows_function = shadows_function + 1;
    }
  }
  each(entries, count);
  let counts = {
    bound_twice,
    shadows_function,
  };
  return counts;
}
