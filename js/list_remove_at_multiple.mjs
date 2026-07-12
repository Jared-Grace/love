import { each } from "./each.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function list_remove_at_multiple(list, removals) {
  function lambda(index) {
    list_remove_at(list, index);
  }
  each(removals, lambda);
}
