import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_permute(list, fns) {
  let r = list_first_remaining(list);
  let first = property_get(r, "first");
  let remaining = property_get(r, "remaining");
  function lambda(fn) {
    let v = fn(first);
    list_add(result, item);
  }
  each(fns, lambda);
}
