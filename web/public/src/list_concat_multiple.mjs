import { list_concat } from "./list_concat.mjs";
import { each } from "./each.mjs";
import { marker } from "./marker.mjs";
export function list_concat_multiple(lists) {
  marker("1");
  let result = [];
  function lambda(item) {
    result = list_concat(result, item);
  }
  each(lists, lambda);
  return result;
}
