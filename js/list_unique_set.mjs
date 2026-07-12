import { each } from "./each.mjs";
import { set_add } from "./set_add.mjs";
import { set_new } from "./set_new.mjs";
export function list_unique_set(list) {
  let set = set_new();
  function lambda(item) {
    set_add(set, item);
  }
  each(list, lambda);
  return set;
}
