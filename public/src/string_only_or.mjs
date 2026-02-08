import { string_transform } from "../../../love/public/src/string_transform.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function string_only_or(s, valid, replacement) {
  let joined = string_transform(s, lambda);
  function lambda(item) {
    let i = text_includes(valid, item);
    if (i) {
      return item;
    }
    let v = replacement;
    return v;
  }
  return joined;
}
