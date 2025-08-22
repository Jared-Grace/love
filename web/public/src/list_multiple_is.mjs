import { list_size } from "./list_size.mjs";
export function list_multiple_is(list) {
  let v = list_size(list) >= 2;
  return v;
}
