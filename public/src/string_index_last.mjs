import { marker } from "../../../love/public/src/marker.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function string_index_last(list) {
  marker("1");
  const index_last = list_size(list) - 1;
  return index_last;
}
