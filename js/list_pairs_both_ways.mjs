import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { each } from "./each.mjs";
export function list_pairs_both_ways(pairs) {
  arguments_assert(arguments, 1);
  ("Every pair given, each followed by the same pair turned round, so a list that holds a,b also holds b,a.");
  let both = [];
  function each_pair_add(pair) {
    let a = list_first(pair);
    let b = list_second(pair);
    list_add_multiple(both, [
      [a, b],
      [b, a],
    ]);
  }
  each(pairs, each_pair_add);
  return both;
}
