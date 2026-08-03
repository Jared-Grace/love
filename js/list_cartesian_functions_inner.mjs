import { add } from "./add.mjs";
import { list_index_past_end_is } from "./list_index_past_end_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_pop } from "./list_pop.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
export function list_cartesian_functions_inner(
  list,
  index,
  fns,
  result,
  candidate,
) {
  let g = list_index_past_end_is(list, index);
  if (g) {
    let copy = list_copy(candidate);
    list_add(result, copy);
    return;
  }
  let item = list_get(list, index);
  function lambda(fn) {
    let v = fn(item);
    list_add(candidate, v);
    let index2 = add(index, 1);
    list_cartesian_functions_inner(list, index2, fns, result, candidate);
    list_pop(candidate);
  }
  each(fns, lambda);
}
