import { arguments_assert } from "./arguments_assert.mjs";
import { literals_marked_both_ways_entry } from "./literals_marked_both_ways_entry.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
export async function literals_marked_both_ways_words_frozen(r) {
  arguments_assert(arguments, 1);
  let r2 = await literals_marked_both_ways_entry(r);
  let frozen_sites = property_get(r2, "frozen_sites");
  let reference_prefix = property_get(r2, "reference_prefix");
  let reference_marker = property_get(r2, "reference_marker");
  let entries = property_get(r2, "entries");
  let words_frozen = list_map_property_unique(frozen_sites, "word");
  let r3 = {
    frozen_sites,
    reference_prefix,
    reference_marker,
    entries,
    words_frozen,
  };
  return r3;
}
