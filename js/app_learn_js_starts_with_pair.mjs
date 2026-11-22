import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export function app_learn_js_starts_with_pair(held, pair) {
  arguments_assert(arguments, 2);
  ("what s.startsWith(sep, i) gives, sep and i handed as one pair: whether sep is there in s starting at index i");
  let searched = list_first(pair);
  let index = list_second(pair);
  let there = held.startsWith(searched, index);
  return there;
}
