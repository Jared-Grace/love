import { arguments_assert } from "./arguments_assert.mjs";
import { list_find } from "./list_find.mjs";
import { property_get } from "./property_get.mjs";
export function list_find_item_property(list, lambda$item, property_name) {
  arguments_assert(arguments, 3);
  ("One named part of the single thing in a list that answers to a test.");
  ("The words of the verse a sermon covers, the lines written about it, the piece");
  ("of code a search settled on. The test says which one, and insisting on exactly");
  ("one is part of the question; the wrapper it comes back in carries several");
  ("things and only one of them is wanted.");
  let found = list_find(list, lambda$item);
  let held = property_get(found, property_name);
  return held;
}
