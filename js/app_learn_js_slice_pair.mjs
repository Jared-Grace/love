import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_slice } from "./list_slice.mjs";
export function app_learn_js_slice_pair(held, pair) {
  arguments_assert(arguments, 2);
  ("what a.slice(from, to) gives, the from and to handed as one pair: the items, or for a string the letters, from the first up to but not including the second");
  let from = list_first(pair);
  let to = list_second(pair);
  let sliced = list_slice(held, from, to);
  return sliced;
}
