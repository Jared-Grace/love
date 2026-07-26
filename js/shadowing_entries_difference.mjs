import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
import { shadowing_entries_by_name } from "./shadowing_entries_by_name.mjs";
import { shadowing_entry_field_difference } from "./shadowing_entry_field_difference.mjs";
import { shadowing_entry_or_empty } from "./shadowing_entry_or_empty.mjs";
export function shadowing_entries_difference(entries, others) {
  "the hidden names each entry has that the entry for the same function in others does not, rule by rule. A function whose names all appear in others drops out, so what comes back is only the change.";
  let by_name = shadowing_entries_by_name(others);
  function collect(emit) {
    function consider(entry) {
      let name = property_get(entry, "name");
      let other = shadowing_entry_or_empty(by_name, name);
      let shadows_outer = shadowing_entry_field_difference(
        entry,
        other,
        "shadows_outer",
      );
      let shadows_function = shadowing_entry_field_difference(
        entry,
        other,
        "shadows_function",
      );
      let count = shadows_outer.length + shadows_function.length;
      let any = greater_than(count, 0);
      if (any) {
        emit({
          name,
          shadows_outer,
          shadows_function,
        });
      }
    }
    each(entries, consider);
  }
  let difference = list_adder(collect);
  return difference;
}
