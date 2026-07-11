import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_first(list) {
  let index = 0;
  let first = list_get(list, index);
  return first;
}
