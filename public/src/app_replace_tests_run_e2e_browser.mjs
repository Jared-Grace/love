import { app_replace_tests_run_e2e_goal } from "../../../love/public/src/app_replace_tests_run_e2e_goal.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
export async function app_replace_tests_run_e2e_browser(rule_set, goal, inner) {
  async function lambda(page) {
    await app_replace_tests_run_e2e_goal(page, goal, rule_set, inner);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
