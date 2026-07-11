import { list_size } from "../../../love/public/src/list_size.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function list_size_less_(count) {
  let sz = list_size(count);
  let sz1 = subtract(sz, 1);
  return sz1;
}
