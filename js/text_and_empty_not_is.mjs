import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_is } from "./text_is.mjs";
export function text_and_empty_not_is(t) {
  let ti = text_is(t);
  let ne = text_empty_not_is(t);
  let r = ti && ne;
  return r;
}
