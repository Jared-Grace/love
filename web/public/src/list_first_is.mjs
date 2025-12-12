import { marker } from "../../../love/public/src/marker.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
export function list_first_is(list, item) {
  marker("1");
  let last = list_last(list);
  let v = last === item;
  return v;
}
