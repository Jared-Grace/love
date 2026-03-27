import { app_replace_test_e2e } from "../../../love/public/src/app_replace_test_e2e.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_goal } from "../../../love/public/src/app_replace_tests_run_e2e_goal.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
export async function app_replace_tests_run_e2e_next() {
  "it takes a long time to run all tests in browser in a row - instead, run all tests in parallel, and this function tests the first two rule sets so that next-ing is tested";
  let rule_sets = app_replace_rule_sets();
  let taken = list_take(rule_sets, 2);
  async function on_page(page) {
    async function lambda3(rule_set) {
      let goals = property_get(rule_set, "goals");
      async function lambda2(goal) {
        await app_replace_tests_run_e2e_goal(
          page,
          goal,
          rule_set,
          app_replace_tests_run_e2e_normal_fn,
        );
      }
      await each_async(goals, lambda2);
    }
    await each_async(taken, lambda3);
  }
  await app_replace_test_e2e(on_page);
}
