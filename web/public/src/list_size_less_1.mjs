import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_less_1(count) {
  let sz = list_size(count);
  let sz1 = sz - 1;
  return sz1;
}
