import { list_size } from "./list_size.mjs";
export function list_empty_is(list) {
  let e = list_size(list) === 0;
  return e;
}
