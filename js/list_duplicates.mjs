import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
export function list_duplicates(list) {
  "The entries of list that already appeared earlier — every occurrence after the first, which is exactly what a keep-first dedup would drop. Pure — returns a new list, mutates nothing.";
  function collect(emit) {
    let seen = {};
    function consider(entry) {
      let already = property_exists(seen, entry);
      if (already) {
        emit(entry);
        return;
      }
      property_set(seen, entry, true);
    }
    each(list, consider);
  }
  let duplicates = list_adder(collect);
  return duplicates;
}
