import { list_any } from "./list_any.mjs";
import { list_includes } from "./list_includes.mjs";
export function lists_any_include(lists, target) {
  function lambda2(list) {
    let i = list_includes(list, target);
    return i;
  }
  let any = list_any(lists, lambda2);
  return any;
}
