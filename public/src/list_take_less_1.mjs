import { list_size_less_1 } from "../../../love/public/src/list_size_less_1.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_take_less_1(list) {
  marker("1");
  let sz1 = list_size_less_1(list);
  let taken = list_take(list, sz1);
  return taken;
}
