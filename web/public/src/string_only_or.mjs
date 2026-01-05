import { string_transform } from "../../../love/public/src/string_transform.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
export function string_only_or(s, valid, replacement) {
  let joined = string_transform(s, lambda);
  function lambda(item) {
    let i = string_includes(valid, item);
    if (i) {
      return item;
    }
    let v = replacement;
    return v;
  }
  return joined;
}
