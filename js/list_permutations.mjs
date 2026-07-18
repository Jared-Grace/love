import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_concat } from "./list_concat.mjs";
import { add_1 } from "./add_1.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function list_permutations(list) {
  "every ordering of the list (n! of them, so keep the list small); duplicate items produce duplicate orderings";
  let size = list_size(list);
  let tiny = less_than(size, 2);
  if (tiny) {
    return [list];
  }
  function orderings_starting_at(index) {
    let item = list_get(list, index);
    let before = list_slice(list, 0, index);
    let after = list_slice(list, add_1(index), size);
    let rest = list_concat(before, after);
    let sub_orderings = list_permutations(rest);
    function prepend(sub) {
      let ordering = list_concat([item], sub);
      return ordering;
    }
    let mapped = list_map(sub_orderings, prepend);
    return mapped;
  }
  let grouped = list_map(range(size), orderings_starting_at);
  let all = list_concat_multiple(grouped);
  return all;
}
