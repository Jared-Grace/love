import { each } from "./each.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function list_to_dictionary_key_lists(list, lambda$item2k) {
  "A list filed under whatever each item is keyed by, with everything sharing a key kept together as a list rather than one of them standing for the rest.";
  "Filing straight onto the key is the wrong shape wherever two items can share one, because the second silently replaces the first and the loss shows up nowhere - not as an error, not as a smaller count, only as an answer that is quietly missing something. Keeping a list at every key is the shape that cannot lose anything, and a key holding exactly one item costs a list of one to say so.";
  let r = {};
  function item_file(item) {
    let key = lambda$item2k(item);
    let started = property_exists(r, key);
    if (started) {
      let held = property_get(r, key);
      held.push(item);
      return;
    }
    property_set(r, key, [item]);
  }
  each(list, item_file);
  return r;
}
