import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_url_dev_watch } from "./app_replace_url_dev_watch.mjs";
import { playwright_test_url_visible } from "./playwright_test_url_visible.mjs";
import { app_replace_tests_run_e2e_goal } from "./app_replace_tests_run_e2e_goal.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
import { each_async } from "./each_async.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
export async function app_replace_tests_run_e2e_smoke() {
  "a visual smoke test, not a logic gate: one visible window plays the first goal of every rule set at full animation speed so a human can confirm the animations and colors look right - the reality boundary the headless assertions are blind to";
  let rule_sets = app_replace_rule_sets();
  let url = await app_replace_url_dev_watch();
  async function on_page(page) {
    async function each_rule_set(rule_set) {
      let goals = property_get(rule_set, "goals");
      let goal = list_first(goals);
      await app_replace_tests_run_e2e_goal(
        page,
        goal,
        rule_set,
        app_replace_tests_run_e2e_normal_fn,
      );
    }
    await each_async(rule_sets, each_rule_set);
  }
  await playwright_test_url_visible(url, on_page);
}
