import { each } from "./each.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function list_to_dictionary_keys_lists(list, lambda$item2keys) {
  "A list filed under every key each item answers to, with everything sharing a key kept together as a list.";
  "An item is allowed more than one key here, which is the whole difference from filing under a single one. A thing often goes by several names - a word and the forms built on it, a person and their initials - and a reader who has only one of them can find it by that one, without anything having to decide up front which name is the real one.";
  "Keeping a list at every key is what makes it safe for two items to answer to the same name. Filing straight onto a key loses the first silently when the second arrives - not as an error, not as a smaller count, only as an answer quietly missing something.";
  let r = {};
  function item_file(item) {
    let keys = lambda$item2keys(item);
    function key_file(key) {
      let started = property_exists(r, key);
      if (started) {
        let held = property_get(r, key);
        held.push(item);
        return;
      }
      property_set(r, key, [item]);
    }
    each(keys, key_file);
  }
  each(list, item_file);
  return r;
}
