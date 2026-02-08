import { not } from "../../../love/public/src/not.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function string_includes_not(item, part) {
  let v = text_includes(item, part);
  let n = not(v);
  return n;
}
