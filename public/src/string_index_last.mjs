import { string_size } from "../../../love/public/src/string_size.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_index_last(list) {
  marker("1");
  const index_last = string_size(list) - 1;
  return index_last;
}
