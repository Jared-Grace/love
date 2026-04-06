import { list_get } from "../../../love/public/src/list_get.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_permute_inner(list, fns, result, candidate, index) {
  let e = null_is(list);
  if (e) {
    let copy = list_copy(candidate);
    list_add(result, copy);
    return;
  }
  let item = list_get(list2, index2);
  let r = list_first_remaining(list);
  let first = property_get(r, "first");
  let remaining = property_get(r, "remaining");
  function lambda(fn) {
    let v = fn(first);
    list_add(candidate, v);
    list_permute_inner(remaining, fns, result, candidate, index + 1);
    list_pop(candidate);
  }
  each(fns, lambda);
}
