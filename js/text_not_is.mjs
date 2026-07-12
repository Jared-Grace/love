import { not } from "./not.mjs";
import { text_is } from "./text_is.mjs";
export function text_not_is(href) {
  let ti = text_is(href);
  let n = not(ti);
  return n;
}
