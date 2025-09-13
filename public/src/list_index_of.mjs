import { error_json } from "./error_json.mjs";
export function list_index_of(list, item) {
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
