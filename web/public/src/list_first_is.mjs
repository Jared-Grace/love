import { list_first } from "../../../love/public/src/list_first.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_first_is(list, item) {
  marker("1");
  let last = list_first(list);
  let v = last === item;
  return v;
}
