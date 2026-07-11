import { list_any } from "../../../love/public/src/list_any.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function lists_any_include(lists, base) {
  function lambda2(list) {
    let i = list_includes(list, base);
    return i;
  }
  let any = list_any(lists, lambda2);
  return any;
}
