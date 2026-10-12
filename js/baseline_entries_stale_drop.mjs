import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function baseline_entries_stale_drop(offenders, path, fields) {
  arguments_assert(arguments, 3);
  ("Take out of a per-function ratchet's record only the entries it lists that no longer happen, and keep everything else exactly as it was.");
  ("The whole rewrite refuses while anyone has added an offense, so one person's new entry kept everyone else's cleanup from being recorded - and the gate stays red on the stale side for a fix that already landed. This can only drop: an entry it removes was in the record, so nothing new is ever blessed, and a function whose names changed rather than went is dropped and then still refused as added.");
  let known = await baseline_known_read(path);
  let change = entries_versus_baseline(offenders, known, fields);
  let stale = property_get(change, "stale");
  let stale_names = list_map_property(stale, "name");
  list_empty_not_is_assert(stale_names);
  function lambda(entry) {
    let name = property_get(entry, "name");
    let n = list_includes_not(stale_names, name);
    return n;
  }
  let kept = list_filter(known, lambda);
  await baseline_known_write(kept, path);
  return stale_names;
}
