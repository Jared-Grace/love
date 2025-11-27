import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function list_without(right) {
  function lambda12(item) {
    let eq2 = not(equal(item, right));
    return eq2;
  }
  let filtered = list_filter(list, lambda12);
  return filtered;
}
