import { list_difference_mapper } from "./list_difference_mapper.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
export function permission_grants_versus_baseline(counted, known) {
  "what changed since the baseline was written";
  "added is a standing grant that fails the check now and did not then — the one the gate exists to refuse. stale is a name the baseline still lists that passes now, the ratchet's other tooth, because an entry left behind lets the same grant come back unnoticed. worsened is a name on both lists failing for more reasons than it did, which is a new hole opening under a grant already blessed.";
  let mapper = property_get_name;
  let added = list_difference_mapper(counted, known, mapper);
  let stale = list_difference_mapper(known, counted, mapper);
  let worsened = [];
  for (let entry of counted) {
    let name = property_get_name(entry);
    let before = list_find_property(known, "name", name);
    if (before) {
      let after_count = property_get(entry, "refusals");
      let before_count = property_get(before, "refusals");
      let grew = greater_than(after_count, before_count);
      if (grew) {
        let one = {
          name,
          before: before_count,
          after: after_count,
        };
        list_add(worsened, one);
      }
    }
  }
  let change = {
    added,
    stale,
    worsened,
  };
  return change;
}
