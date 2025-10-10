import { not } from "../../../love/public/src/not.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
export function string_includes_not(item, part) {
  let v = string_includes(item, part);
  let n = not(v);
  return n;
}
