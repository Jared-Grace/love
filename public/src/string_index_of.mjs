import { marker } from "../../../love/public/src/marker.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
export function string_index_of(list, item) {
  marker("1");
  let index = list.indexOf(item);
  if (index <= -1) {
    error_json({
      list,
      item,
      index,
    });
  }
  return index;
}
