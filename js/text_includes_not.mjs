import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_includes_not(item, part) {
  let v = text_includes(item, part);
  let n = not(v);
  return n;
}
