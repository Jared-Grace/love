import { marker } from "../../../love/public/src/marker.mjs";
export function list_remove_at_count(list, index, count) {
  let e = list.splice(index, count);
  return e;
}
