import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export function app_learn_js_index_of_from_pair(held, pair) {
  arguments_assert(arguments, 2);
  ('what a.indexOf("joy", from) gives, the item and from handed as one pair: the index of the first such item at from or after it, or -1');
  let searched = list_first(pair);
  let from = list_second(pair);
  let index = held.indexOf(searched, from);
  return index;
}
