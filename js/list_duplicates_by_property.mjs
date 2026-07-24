import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
export function list_duplicates_by_property(list, property_name) {
  "The entries of list whose value for property_name already appeared in an earlier entry — every";
  "occurrence after the first, keyed by that property. Keep-first dedup: the returned entries are the";
  "ones a dedup would drop. Pure — returns a new list, mutates nothing.";
  arguments_assert(arguments, 2);
  function collect(add) {
    let seen = {};
    function consider(entry) {
      let value = property_get(entry, property_name);
      let already = property_exists(seen, value);
      if (already) {
        add(entry);
        return;
      }
      property_set(seen, value, true);
    }
    each(list, consider);
  }
  let duplicates = list_adder(collect);
  return duplicates;
}
