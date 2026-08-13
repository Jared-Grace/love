import { playwright_test_url } from "./playwright_test_url.mjs";
import { each_async } from "./each_async.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_goal } from "./app_replace_tests_run_e2e_goal.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
export async function app_replace_tests_run_e2e_next_rule_sets(url, rule_sets) {
  "$plain url";
  "Walks the first two sets of rules on a page, goal by goal, so that moving on to the next one is proven and not only the solving.";
  "Which sets these are is received rather than looked up, because the page being tested is not always the page this code was built from - a copy kept from an earlier build offers the goals of its own day, and asking today's list for them names goals that page never had.";
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
