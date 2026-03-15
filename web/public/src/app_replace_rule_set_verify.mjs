import { each } from "../../../love/public/src/each.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_apply } from "../../../love/public/src/app_replace_rule_apply.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_set_identifiers_simple } from "../../../love/public/src/app_replace_rule_set_identifiers_simple.mjs";
export function app_replace_rule_set_verify() {
  let rs = app_replace_rule_set_identifiers_simple;
  let rules = property_get(rs, "rules");
  let goals = property_get(rs, "goals");
  let g = list_first(goals);
  let start = property_get(g, "start");
  let end = property_get(g, "end");
  function lambda(rules) {
    function lambda2(item2) {}
    each(list2, lambda2);
  }
  each(list, lambda);
  let eq = app_replace_rule_valid(rule, index, start);
  let start3 = app_replace_rule_apply(rule, index, start);
}
