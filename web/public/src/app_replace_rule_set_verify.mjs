import { list_size_range } from "../../../love/public/src/list_size_range.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
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
  let se = app_replace_start_end_get(g);
  let start = property_get(se, "start");
  let end = property_get(se, "end");
  let r = list_size_range(start);
  function lambda(rule) {
    function lambda2(item2) {}
    each(list2, lambda2);
  }
  each(rules, lambda);
  let eq = app_replace_rule_valid(rule, index, start);
  let start3 = app_replace_rule_apply(rule, index, start);
}
