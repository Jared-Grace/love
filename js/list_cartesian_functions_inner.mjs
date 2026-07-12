import { at_least } from "./at_least.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_pop } from "./list_pop.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_cartesian_functions_inner(
  list,
  index,
  fns,
  result,
  candidate,
) {
  let size = list_size(list);
  let g = at_least(index, size);
  if (g) {
    let copy = list_copy(candidate);
    list_add(result, copy);
    return;
  }
  let item = list_get(list, index);
  function lambda(fn) {
    let v = fn(item);
    list_add(candidate, v);
    list_cartesian_functions_inner(
      list,
      text_combine(index, 1),
      fns,
      result,
      candidate,
    );
    list_pop(candidate);
  }
  each(fns, lambda);
}
