import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_includes_curried } from "../../../love/public/src/list_includes_curried.mjs";
export function list_includes_all(list, items) {
  let r2 = list_includes_curried(items);
  let all_rules_used = list_all(list, r2);
  return all_rules_used;
}
