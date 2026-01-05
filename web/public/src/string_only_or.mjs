import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export function string_only_or(s, valid, replacement) {
  let l = list_to(s);
  function lambda(item) {
    let i = string_includes(valid, item);
    if (i) {
      return item;
    }
    let v = replacement;
    return v;
  }
  let mapped = list_map(l, lambda);
  let joined = list_join_empty(mapped);
  return joined;
}
