import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function list_remove_multiple(removals, list) {
  each(removals, (r) => {
    list_remove(list, r);
  });
}
