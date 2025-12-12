import { list_first } from "../../../love/public/src/list_first.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_first_is(list, item) {
  marker("1");
  let f = list_first(list);
  let v = f === item;
  return v;
}
