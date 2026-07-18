import { list_iterator_refillable_on } from "./list_iterator_refillable_on.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function list_iterator_shuffled_avoid_repeat(items, key_property) {
  "return a next_get() iterator over items that reshuffles when exhausted and never yields the same item back-to-back across the reshuffle seam (compared by key_property), so a pool (e.g. prayer verses) feels fresh; hold ONE iterator so the rotation persists across draws";
  let last_key = null;
  function on_refill(remaining) {
    list_shuffle(remaining);
    let size = list_size(remaining);
    let multiple = size > 1;
    if (multiple) {
      let first = list_first(remaining);
      let repeats = property_get(first, key_property) === last_key;
      if (repeats) {
        list_remove_at(remaining, 0);
        list_add(remaining, first);
      }
    }
    last_key = property_get(list_last(remaining), key_property);
  }
  function refill_get() {
    return items;
  }
  let next_get = list_iterator_refillable_on(refill_get, on_refill);
  return next_get;
}
