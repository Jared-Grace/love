import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
import { shadowing_entries_by_name } from "./shadowing_entries_by_name.mjs";
import { shadowing_entry_or_empty } from "./shadowing_entry_or_empty.mjs";
export function shadowing_entries_difference(entries, others) {
  "the shadowed names each entry has that the entry for the same function in others does not, rule by rule. A function whose names all appear in others drops out, so what comes back is only the change.";
  let by_name = shadowing_entries_by_name(others);
  function collect(emit) {
    function consider(entry) {
      let name = property_get(entry, "name");
      let other = shadowing_entry_or_empty(by_name, name);
      let list = property_get(entry, "duplicated");
      let list_other = property_get(other, "duplicated");
      let duplicated = list_difference(list, list_other);
      let list2 = property_get(entry, "shadowed");
      let list_other2 = property_get(other, "shadowed");
      let shadowed = list_difference(list2, list_other2);
      let count = duplicated.length + shadowed.length;
      let any = greater_than(count, 0);
      if (any) {
        emit({
          name,
          duplicated,
          shadowed,
        });
      }
    }
    each(entries, consider);
  }
  let difference = list_adder(collect);
  return difference;
}
