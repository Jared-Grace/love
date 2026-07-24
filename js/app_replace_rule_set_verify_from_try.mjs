import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { list_adder } from "./list_adder.mjs";
import { app_replace_rule_apply } from "./app_replace_rule_apply.mjs";
import { app_replace_rule_valid } from "./app_replace_rule_valid.mjs";
import { each_nested_args } from "./each_nested_args.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
import { json_to } from "./json_to.mjs";
import { graph_search_breadth_first } from "./graph_search_breadth_first.mjs";
import { app_replace_rule_set_verify_goal_depth_max } from "./app_replace_rule_set_verify_goal_depth_max.mjs";
export function app_replace_rule_set_verify_from_try(rules_parsed, start, end) {
  function lambda4(item) {
    list_is_assert_json(item, {
      hint: "both the start and end states should be lists to verify a path between them",
    });
  }
  each([start, end], lambda4);
  log(app_replace_rule_set_verify_from_try.name, {
    rules_parsed,
    start,
    end,
  });
  let max_depth = app_replace_rule_set_verify_goal_depth_max();
  let dfs = graph_search_breadth_first(
    start,
    neighbors_get,
    json_to,
    max_depth,
    end,
  );
  function neighbors_get(start) {
    let indices = list_to_indices(start);
    function lambda(la) {
      each_nested_args(rules_parsed, indices, lambda3);
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
