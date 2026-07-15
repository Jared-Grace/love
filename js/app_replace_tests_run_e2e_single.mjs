import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_goal } from "./app_replace_tests_run_e2e_goal.mjs";
import { app_replace_url_dev_watch } from "./app_replace_url_dev_watch.mjs";
import { playwright_test_url_visible } from "./playwright_test_url_visible.mjs";
import { property_get } from "./property_get.mjs";
import { function_run_args_none } from "./function_run_args_none.mjs";
import { list_get } from "./list_get.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
export async function app_replace_tests_run_e2e_single(
  rule_set_fn_name,
  goal_index_text,
) {
  "watch one goal solve in a real window: resolve the named rule-set fn, pick its goal by index, and play it headed at full animation speed - the single-goal debugger for a red goal, and the working form of the are alias (was broken: referenced an undefined goal)";
  let rule_set = await function_run_args_none(rule_set_fn_name);
  let goals = property_get(rule_set, "goals");
  let base_ten = 10;
  let goal_index = integer_from_base_try(goal_index_text, base_ten);
  let goal = list_get(goals, goal_index);
  let url = await app_replace_url_dev_watch();
  async function on_page(page) {
    await app_replace_tests_run_e2e_goal(
      page,
      goal,
      rule_set,
      app_replace_tests_run_e2e_normal_fn,
    );
  }
  await playwright_test_url_visible(url, on_page);
}
