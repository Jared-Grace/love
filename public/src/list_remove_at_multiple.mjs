import { each } from "../../../love/public/src/each.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
export function list_remove_at_multiple(c) {
  function lambda2(index) {
    list_remove_at(params, index);
  }
  each(c, lambda2);
}
