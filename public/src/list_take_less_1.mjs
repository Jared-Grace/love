import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_take_less_1(list, count) {
  marker("1");
  let sz = list_size(count);
  let sz1 = sz - 1;
  let taken = list_take(list, sz1);
  return taken;
}
