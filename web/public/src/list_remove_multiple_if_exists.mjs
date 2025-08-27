import { marker } from "./marker.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function list_remove_multiple_if_exists(removals, list) {
  marker("1");
  function lambda(r) {
    list_remove(list, r);
  }
  each(removals, lambda);
}
