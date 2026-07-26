import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { entries_by_name } from "./entries_by_name.mjs";
export function unbound_entries_difference(entries, others) {
  "the unbound names each entry has that the entry for the same function in others does not. A function whose names all appear in others drops out, so what comes back is only the change. A function missing from others read no unbound name there, which is not the same as a lookup having failed, so it counts as an empty list rather than an absence.";
  let by_name = entries_by_name(others);
  function collect(emit) {
    function consider(entry) {
      let name = property_get(entry, "name");
      let unbound = property_get(entry, "unbound");
      let listed = property_exists(by_name, name);
      let already = [];
      if (listed) {
        let other = property_get(by_name, name);
        already = property_get(other, "unbound");
      }
      let extra = list_difference(unbound, already);
      let any = greater_than(extra.length, 0);
      if (any) {
        emit({
          name,
          unbound: extra,
        });
      }
    }
    each(entries, consider);
  }
  let changed = list_adder(collect);
  return changed;
}
