import { app_replace_rule_set_verify_goal_depth_max } from "../../../love/public/src/app_replace_rule_set_verify_goal_depth_max.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { app_replace_rule_apply } from "../../../love/public/src/app_replace_rule_apply.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { list_size_range } from "../../../love/public/src/list_size_range.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { graph_search_depth_first } from "../../../love/public/src/graph_search_depth_first.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function app_replace_rule_set_verify_goal(goal, rules_parsed) {
  log(app_replace_rule_set_verify_goal.name, {
    goal,
  });
  let se = app_replace_start_end_get(goal);
  let end = property_get(se, "end");
  let start = property_get(se, "start");
  let max_depth = app_replace_rule_set_verify_goal_depth_max();
  let dfs = graph_search_depth_first(
    start,
    neighbors_get,
    json_to,
    max_depth,
    end,
  );
  log(app_replace_rule_set_verify_goal.name, {
    dfs,
  });
  function neighbors_get(start) {
    let indices = list_size_range(start);
    function lambda(la) {
      each_nested_distinct(lambda3, rules_parsed, indices);
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
  return dfs;
}
