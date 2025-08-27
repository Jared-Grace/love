import { marker } from "./marker.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { each } from "./each.mjs";
export function list_remove_all_multiple(removals, list) {
  marker("1");
  function lambda(r) {
    list_remove_all(list, r);
  }
  each(removals, lambda);
}
