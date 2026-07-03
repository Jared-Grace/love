import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_take_less_1 } from "../../../love/public/src/list_take_less_1.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
export function list_between(list, item_between) {
  let taken = list_take_less_1(list);
  function lambda(t) {
    let pair = [t, item_between];
    return pair;
  }
  let mapped = list_map(taken, lambda);
  let last = list_last(list);
  list_add(mapped, [last]);
  let combined = list_concat_multiple(lists);
  return mapped;
}
