import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_includes_curried } from "../../../love/public/src/list_includes_curried.mjs";
export function list_includes_all(unique, rules) {
  let r2 = list_includes_curried(unique);
  let all_rules_used = list_all(rules, r2);
  return all_rules_used;
}
