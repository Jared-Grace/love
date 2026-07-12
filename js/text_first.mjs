import { text_get } from "./text_get.mjs";
export function text_first(t) {
  let item = text_get(t, 0);
  return item;
}
