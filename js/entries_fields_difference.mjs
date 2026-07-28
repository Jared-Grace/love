import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
import { entries_by_name } from "./entries_by_name.mjs";
export function entries_fields_difference(entries, others, fields) {
  arguments_assert(arguments, 3);
  ("The names each entry holds under the named fields that the entry for the same");
  ("function in others does not hold under the same field. A function whose names");
  ("all appear in others drops out, so what comes back is only the change.");
  ("A function missing from others held nothing there, which is not the same as a");
  ("lookup having failed, so it counts as an empty list rather than an absence.");
  ("Every ratchet that records a list per function compares the same way and");
  ("differs only in what its lists are called, so the field names are the argument.");
  let by_name = entries_by_name(others);
  function collect(emit) {
    function consider(entry) {
      let name = property_get(entry, "name");
      let other = property_get_or(by_name, name, {});
      let changed = {
        name,
      };
      let count = 0;
      function field_consider(field_name) {
        let list = property_get(entry, field_name);
        let already = property_get_or(other, field_name, []);
        let extra = list_difference(list, already);
        count = count + extra.length;
        property_set(changed, field_name, extra);
      }
      each(fields, field_consider);
      let any = greater_than(count, 0);
      if (any) {
        emit(changed);
      }
    }
    each(entries, consider);
  }
  let difference = list_adder(collect);
  return difference;
}
