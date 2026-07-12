import { app_replace_url_dev } from "./app_replace_url_dev.mjs";
import { app_replace_tests_run_e2e_goal } from "./app_replace_tests_run_e2e_goal.mjs";
import { app_replace } from "./app_replace.mjs";
import { playwright_test_app_dev } from "./playwright_test_app_dev.mjs";
export async function app_replace_tests_run_e2e_browser(rule_set, goal, inner) {
  async function lambda(page) {
    await app_replace_tests_run_e2e_goal(page, goal, rule_set, inner);
  }
  let url = await app_replace_url_dev();
  await playwright_test_app_dev(url, app_replace, lambda);
}
