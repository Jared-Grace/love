import { each } from "../../../love/public/src/each.mjs";
import { set_add } from "../../../love/public/src/set_add.mjs";
import { set_new } from "../../../love/public/src/set_new.mjs";
export function list_unique_set(list) {
  let found = set_new();
  function lambda(item) {
    set_add(found, item);
  }
  each(list, lambda);
  return found;
}
