import { list_concat } from "./list_concat.mjs";
import { each } from "./each.mjs";
import { marker } from "./marker.mjs";
export function list_concat_multiple(lists) {
  marker("1");
  let combined = [];
  function lambda(item) {
    combined = list_concat(combined, item);
  }
  each(lists, lambda);
  return combined;
}
