import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_first_last(list) {
  marker("1");
  let first = list_first(list);
  let last = list_last(list);
  let v = [first, last];
  return v;
}
