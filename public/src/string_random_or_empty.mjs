import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
export function string_random_or_empty(a) {
  let r = list_random_item(["", a]);
  return r;
}
