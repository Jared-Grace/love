import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_first(list) {
  const index = 0;
  const first = list_get(list, index);
  return first;
}
