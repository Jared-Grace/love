import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function literals_marked_both_ways_conflicts(r2) {
  arguments_assert(arguments, 1);
  let words_frozen = property_get(r2, "words_frozen");
  let entries = property_get(r2, "entries");
  let reference_marker = property_get(r2, "reference_marker");
  let reference_prefix = property_get(r2, "reference_prefix");
  let frozen_sites = property_get(r2, "frozen_sites");
  let conflicts = [];
  let r = {
    words_frozen,
    entries,
    reference_marker,
    reference_prefix,
    frozen_sites,
    conflicts,
  };
  return r;
}
