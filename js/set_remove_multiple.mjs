import { arguments_assert } from "./arguments_assert.mjs";
import { set_remove } from "./set_remove.mjs";
import { each } from "./each.mjs";
export function set_remove_multiple(s, items) {
  "Takes every one of a list of things out of a set, and says nothing about which of them were in it.";
  "The set is changed where it stands rather than a second one being handed back, because the sets this was written for hold hundreds of thousands of things and the other way would hold two of them at once.";
  arguments_assert(arguments, 2);
  function lambda(item) {
    set_remove(s, item);
  }
  each(items, lambda);
}
