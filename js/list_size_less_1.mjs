import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_size_less_1(count) {
  let sz = list_size(count);
  let sz1 = subtract(sz, 1);
  return sz1;
}
