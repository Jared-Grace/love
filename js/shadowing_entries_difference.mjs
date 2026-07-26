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
      let duplicated = list_difference(
        property_get(entry, "duplicated"),
        property_get(other, "duplicated"),
      );
      let shadowed = list_difference(
        property_get(entry, "shadowed"),
        property_get(other, "shadowed"),
      );
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
