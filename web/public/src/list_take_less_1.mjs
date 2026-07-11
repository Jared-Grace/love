import { list_size_less_ } from "../../../love/public/src/list_size_less_1.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
export function list_take_less_(list) {
  let sz = list_size_less_(list);
  let taken = list_take(list, sz);
  return taken;
}
