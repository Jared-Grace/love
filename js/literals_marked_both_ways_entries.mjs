import { arguments_assert } from "./arguments_assert.mjs";
import { literals_marked_both_ways_frozen_sites } from "./literals_marked_both_ways_frozen_sites.mjs";
import { property_get } from "./property_get.mjs";
export async function literals_marked_both_ways_entries(repo_name) {
  arguments_assert(arguments, 1);
  let r = await literals_marked_both_ways_frozen_sites(repo_name);
  let frozen_sites = property_get(r, "frozen_sites");
  let reference_prefix = property_get(r, "reference_prefix");
  let frozen_needle = property_get(r, "frozen_needle");
  let reference_marker = property_get(r, "reference_marker");
  let frozen_marker = property_get(r, "frozen_marker");
  let entries = property_get(r, "entries");
  let r2 = {
    frozen_sites,
    reference_prefix,
    frozen_needle,
    reference_marker,
    frozen_marker,
    entries,
  };
  return r2;
}
