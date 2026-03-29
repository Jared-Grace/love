import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { app_replace_rule_apply } from "../../../love/public/src/app_replace_rule_apply.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { each_nested_distinct } from "../../../love/public/src/each_nested_distinct.mjs";
import { list_size_range } from "../../../love/public/src/list_size_range.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { graph_search_depth_first } from "../../../love/public/src/graph_search_depth_first.mjs";
import { app_replace_rule_set_verify_goal_depth_max } from "../../../love/public/src/app_replace_rule_set_verify_goal_depth_max.mjs";
export function app_replace_rule_set_verify_from_try(rules_parsed, start, end) {
  each([start, end], list_is_assert);
  log(app_replace_rule_set_verify_from_try.name, {
    rules_parsed,
    start,
    end,
  });
  let max_depth = app_replace_rule_set_verify_goal_depth_max();
  let dfs = graph_search_depth_first(
    start,
    neighbors_get,
    json_to,
    max_depth,
    end,
  );
  function neighbors_get(start) {
    let indices = list_size_range(start);
    function lambda(la) {
      each_nested_distinct(lambda3, rules_parsed, indices);
      function lambda3(rule, index) {
        let eq = app_replace_rule_valid(rule, index, start);
        if (eq) {
          let neighbor = app_replace_rule_apply(rule, index, start);
          la({
            neighbor,
            data: {
              rule,
              index,
            },
          });
        }
        return eq;
      }
    }
    let neighbors = list_adder(lambda);
    return neighbors;
  }
  return dfs;
}
