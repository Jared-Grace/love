import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_remove_multiple(list, removals) {
  marker("1");
  function lambda(r) {
    list_remove(list, r);
  }
  each(removals, lambda);
}
