import { list_to_dictionary_keys_lists } from "./list_to_dictionary_keys_lists.mjs";
export function list_to_dictionary_key_lists(list, lambda$item2k) {
  "A list filed under whatever each item is keyed by, with everything sharing a key kept together as a list rather than one of them standing for the rest.";
  "Filing straight onto the key is the wrong shape wherever two items can share one, because the second silently replaces the first and the loss shows up nowhere - not as an error, not as a smaller count, only as an answer that is quietly missing something. Keeping a list at every key is the shape that cannot lose anything, and a key holding exactly one item costs a list of one to say so.";
  "One key is the case of many keys where there happens to be one, so that is how it is said here rather than by keeping a second copy of the filing that would have to be kept right twice.";
  function item_keys(item) {
    let key = lambda$item2k(item);
    let keys = [key];
    return keys;
  }
  let r = list_to_dictionary_keys_lists(list, item_keys);
  return r;
}
