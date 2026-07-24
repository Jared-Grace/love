import { list_remove_every } from "./list_remove_every.mjs";
import { each } from "./each.mjs";
export function list_remove_all_multiple(removals, list) {
  function lambda(r) {
    list_remove_every(list, r);
  }
  each(removals, lambda);
}
