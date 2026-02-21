import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_multiple_is(list) {
  let m = list_size(list) >= 2;
  return m;
}
