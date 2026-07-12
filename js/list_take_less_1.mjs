import { list_size_less_1 } from "./list_size_less_1.mjs";
import { list_take } from "./list_take.mjs";
export function list_take_less_1(list) {
  let sz = list_size_less_1(list);
  let taken = list_take(list, sz);
  return taken;
}
