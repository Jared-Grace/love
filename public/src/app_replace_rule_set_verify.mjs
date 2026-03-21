import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { graph_search_depth_first } from "../../../love/public/src/graph_search_depth_first.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { list_size_range } from "../../../love/public/src/list_size_range.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_apply } from "../../../love/public/src/app_replace_rule_apply.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_to } from "./json_to.mjs";
export function app_replace_rule_set_verify(rule_set_get) {
  let rs = rule_set_get();
  let rules = app_replace_rule_set_rules_get(rs);
  let goals = property_get(rs, "goals");
  let g = list_first(goals);
  let se = app_replace_start_end_get(g);
  let end = property_get(se, "end");
  let start = property_get(se, "start");
  let r2 = graph_search_depth_first(start, neighbors_get, json_to, 8, end);
  return r2;
  function neighbors_get(start) {
    let r = list_size_range(start);
    function lambda(la) {
      each_nested_distinct(lambda3, r, rules);
      function lambda3(rule, index) {
        let eq = app_replace_rule_valid(rule, index, start);
        if (eq) {
          let start_next = app_replace_rule_apply(rule, index, start);
          la(start_next);
        }
        return eq;
      }
    }
    let neighbors = list_adder(lambda);
    return neighbors;
  }
}
