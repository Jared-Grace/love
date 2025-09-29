import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_empty_is(list) {
  const e = list_size(list) === 0;
  return e;
}
