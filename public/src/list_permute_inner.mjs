import { greater_than_or_equal } from "../../../love/public/src/greater_than_or_equal.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_permute_inner(list, index, fns, result, candidate) {
  let size = list_size(list);
  let g = greater_than_or_equal(index, size);
  if (g) {
    let copy = list_copy(candidate);
    list_add(result, copy);
    return;
  }
  let item = list_get(list, index);
  function lambda(fn) {
    let v = fn(item);
    list_add(candidate, v);
    list_permute_inner(remaining, index + 1, fns, result, candidate);
    list_pop(candidate);
  }
  each(fns, lambda);
}
