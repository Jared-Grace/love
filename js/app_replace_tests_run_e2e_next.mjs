import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { each_async } from "./each_async.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_goal } from "./app_replace_tests_run_e2e_goal.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
export async function app_replace_tests_run_e2e_next(url) {
  "it took a long time to run all tests in browser in a row - instead, run all tests in parallel, and this function tests the first two rule sets so that next-ing is tested";
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
  await playwright_test_url(url, on_page);
}
