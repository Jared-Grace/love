import { each_index } from "../../../love/public/src/each_index.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_index_reverse(list, lambda$item$index) {
  marker("1");
  function lambda() {}
  let v = each_index(list, lambda);
  return v;
}
