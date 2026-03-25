import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { app_replace_tests_run_e2e_goal } from "../../../love/public/src/app_replace_tests_run_e2e_goal.mjs";
import { object_wrap_multiple } from "../../../love/public/src/object_wrap_multiple.mjs";
import { object_merge_multiple } from "../../../love/public/src/object_merge_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { each_range_unordered_async } from "../../../love/public/src/each_range_unordered_async.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { app_replace_tests_run_e2e_browser } from "../../../love/public/src/app_replace_tests_run_e2e_browser.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_normal() {
  let rule_sets = app_replace_rule_sets();
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
  let count = 15;
  async function each_chunk(chunk) {
    async function each_goal(m) {
      let rule_set = property_get(m, "rule_set");
      let goal = property_get(m, "goal");
      await app_replace_tests_run_e2e_browser(
        rule_set,
        goal,
        app_replace_tests_run_e2e_normal_fn,
      );
    }
    await each_unordered_async(chunk, each_goal);
  }
  async function lambda(index) {
    async function lambda(page) {
      await app_replace_tests_run_e2e_goal(page, goal, rule_set, inner);
    }
    await playwright_test_app_dev(app_replace, lambda);
  }
  await each_range_unordered_async(count, lambda);
}
