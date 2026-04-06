import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_permute(r, fns) {
  let first = property_get(r, "first");
  let result = [];
  let remaining = property_get(r, "remaining");
  function lambda(fn) {
    let v = fn(first);
    list_add(result, item);
  }
  each(fns, lambda);
}
