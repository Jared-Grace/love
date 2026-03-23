import { app_replace_rule_set_verify_goal_next } from "../../../love/public/src/app_replace_rule_set_verify_goal_next.mjs";
import { playwright_by_attribute_test_click } from "../../../love/public/src/playwright_by_attribute_test_click.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_tests_run_e2e() {
  let rule_sets = app_replace_rule_sets();
  async function lambda(page) {
    let first = list_first(rule_sets);
    let name2 = property_get(first, "name");
    await playwright_by_attribute_test_click(page, name2);
    let goals = property_get(first, "goals");
    let g = list_first(goals);
    let json = json_to(g);
    await playwright_by_attribute_test_click(page, json);
    async function lambda_each(rule_set) {
      let second = app_replace_rule_set_verify_goal_next(
        rules_parsed,
        start,
        end,
      );
      return true;
    }
    await each_async(rule_sets, lambda_each);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
