import { marker } from "./marker.mjs";
import { error_json } from "./error_json.mjs";
export function list_index_of_last(list, item) {
  marker("1");
  let index = list.lastIndexOf(item);
  if (index <= -1) {
    error_json({
      list,
      item,
      index,
    });
  }
  return index;
}
