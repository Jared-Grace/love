import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { graph_search_depth_first } from "../../../love/public/src/graph_search_depth_first.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { list_size_range } from "../../../love/public/src/list_size_range.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { app_replace_rule_apply } from "../../../love/public/src/app_replace_rule_apply.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_to } from "./json_to.mjs";
export function app_replace_rule_set_verify(rule_set_get) {
  let rs = rule_set_get();
  let rules = app_replace_rule_set_rules_get(rs);
  let goals = property_get(rs, "goals");
  function lambda2(goal) {
    let se = app_replace_start_end_get(goal);
    let end = property_get(se, "end");
    let start = property_get(se, "start");
    let dfs = graph_search_depth_first(start, neighbors_get, json_to, 13, end);
    function neighbors_get(start) {
      let indices = list_size_range(start);
      function lambda(la) {
        each_nested_distinct(lambda3, rules, indices);
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
    let found = property_get(dfs, "found");
    function lambda3() {
      let r = {
        goal,
      };
      return r;
    }
    assert_json_get(found, lambda3);
    if (not(found)) {
    }
    return dfs;
  }
  each(goals, lambda2);
}
