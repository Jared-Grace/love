import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
export function shadowing_entries_counts(entries) {
  "how many functions break each of the two name rules — the two numbers that say whether the ratchet is tightening";
  let hides_outer = 0;
  let hides_function = 0;
  function count(entry) {
    let shadows_outer = property_get(entry, "shadows_outer");
    let shadows_function = property_get(entry, "shadows_function");
    let any_outer = greater_than(shadows_outer.length, 0);
    if (any_outer) {
      hides_outer = hides_outer + 1;
    }
    let any_function = greater_than(shadows_function.length, 0);
    if (any_function) {
      hides_function = hides_function + 1;
    }
  }
  each(entries, count);
  let counts = {
    hides_outer,
    hides_function,
  };
  return counts;
}
