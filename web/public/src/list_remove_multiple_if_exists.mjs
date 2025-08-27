import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { marker } from "./marker.mjs";
import { each } from "./each.mjs";
export function list_remove_multiple_if_exists(removals, list) {
  marker("1");
  function lambda(r) {
    list_remove_if_exists(list, r);
  }
  each(removals, lambda);
}
