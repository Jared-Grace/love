import { list_copy } from "../../../love/public/src/list_copy.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_pop } from "../../../love/public/src/list_pop.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_permute(list, fns, result, candidate) {
  let e = list_empty_is(list);
  if (e) {
    let copy = list_copy(candidate);
    list_add(list2, item);
  }
  let r = list_first_remaining(list);
  let first = property_get(r, "first");
  let remaining = property_get(r, "remaining");
  function lambda(fn) {
    let v = fn(first);
    list_add(candidate, v);
    list_permute(list, fns, result, candidate);
    list_pop(candidate);
  }
  each(fns, lambda);
}
