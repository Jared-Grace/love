import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
export function text_random_or_empty(t) {
  let r = list_random_item(["", t]);
  return r;
}
