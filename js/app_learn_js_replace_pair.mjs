import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export function app_learn_js_replace_pair(held, pair) {
  arguments_assert(arguments, 2);
  ("what s.replace(a, b) gives, a and b handed as one pair: a new string, with only the first a in s changed to b; s itself is left as it was");
  let searched = list_first(pair);
  let put = list_second(pair);
  let replaced = held.replace(searched, put);
  return replaced;
}
