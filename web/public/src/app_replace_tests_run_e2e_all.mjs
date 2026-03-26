import { app_replace_rule_set_binary_counting } from "../../../love/public/src/app_replace_rule_set_binary_counting.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { each_range_unordered_async } from "../../../love/public/src/each_range_unordered_async.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { list_empty_not_is_while_async } from "../../../love/public/src/list_empty_not_is_while_async.mjs";
import { app_replace_tests_run_e2e_goal } from "../../../love/public/src/app_replace_tests_run_e2e_goal.mjs";
import { list_pop_first } from "../../../love/public/src/list_pop_first.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { object_merge_multiple } from "../../../love/public/src/object_merge_multiple.mjs";
import { object_wrap_multiple } from "../../../love/public/src/object_wrap_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { log_keep } from "./log_keep.mjs";
export async function app_replace_tests_run_e2e_all(e2e_inner_fns) {
  let rule_sets = app_replace_rule_sets();
  let r = app_replace_rule_set_binary_counting();
  rule_sets = [r];
  function lambda2(rule_set) {
    let goals = property_get(rule_set, "goals");
    let mapped = object_wrap_multiple(goals, "goal");
    let merged = {
      rule_set,
    };
    object_merge_multiple(mapped, merged);
    return mapped;
  }
  let remaining = list_map_squash(rule_sets, lambda2);
  let parallel_count = 1;
  async function lambda(index) {
    async function on_page(page) {
      async function while_non_empty() {
        let next = list_pop_first(remaining);
        let rule_set = property_get(next, "rule_set");
        let goal = property_get(next, "goal");
        log_keep(app_replace_tests_run_e2e_all.name, {
          goal,
        });
        async function each_e2e_inner_fn(e2e_inner_fn) {
          await app_replace_tests_run_e2e_goal(
            page,
            goal,
            rule_set,
            e2e_inner_fn,
          );
        }
        await each_async(e2e_inner_fns, each_e2e_inner_fn);
      }
      await list_empty_not_is_while_async(remaining, while_non_empty);
    }
    await playwright_test_app_dev(app_replace, on_page);
  }
  await each_range_unordered_async(parallel_count, lambda);
}
