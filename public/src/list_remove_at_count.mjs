import { marker } from "../../../love/public/src/marker.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function list_remove_at_count(list, index) {
  marker("1");
  let e = list.splice(index, 1);
  let only = list_single(e);
  return only;
}
