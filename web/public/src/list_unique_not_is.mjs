import { list_unique_is } from "../../../love/public/src/list_unique_is.mjs";
export function list_unique_not_is(mapped) {
  let a = !list_unique_is(mapped);
  return a;
}
