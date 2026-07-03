import { list_random_index } from "../../../love/public/src/list_random_index.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_random_item(list) {
  let index = list_random_index(list);
  let r = list_get(list, index);
  return r;
}
