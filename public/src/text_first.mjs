import { text_get } from "../../../love/public/src/text_get.mjs";
export function text_first(s) {
  let item = text_get(s, 0);
  return item;
}
