import { list_all } from "../../../love/public/src/list_all.mjs";
import { text_includes_not } from "../../../love/public/src/text_includes_not.mjs";
export function text_includes_not_multiple(t, parts) {
  function lambda(part) {
    let n = text_includes_not(t, part);
    return n;
  }
  let a = list_all(parts, lambda);
  return a;
}
