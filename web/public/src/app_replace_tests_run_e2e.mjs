import { app_replace_rule_set_success_attribute_next } from "../../../love/public/src/app_replace_rule_set_success_attribute_next.mjs";
import { sleep_long } from "../../../portfolio_qa/public/src/sleep_long.mjs";
import { app_replace_rule_set_attribute_symbol } from "../../../love/public/src/app_replace_rule_set_attribute_symbol.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
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
    let goals_first_rs = property_get(first, "goals");
    let g = list_first(goals_first_rs);
    let json = json_to(g);
    await playwright_by_attribute_test_click(page, json);
    async function lambda_each(rule_set) {
      let goals = property_get(rule_set, "goals");
      let rules_parsed = app_replace_rule_set_rules_get(rule_set);
      async function lambda2(goal) {
        let r4 = app_replace_start_end_get(goal);
        let start = property_get(r4, "start");
        let end = property_get(r4, "end");
        let second = app_replace_rule_set_verify_goal_next(
          rules_parsed,
          start,
          end,
        );
        let rule = property_get(second, "rule");
        let index = property_get(second, "index");
        let original = property_get(rule, "original");
        await playwright_by_attribute_test_click(page, original);
        let value = app_replace_rule_set_attribute_symbol(index);
        await playwright_by_attribute_test_click(page, value);
        let name22 = app_replace_rule_set_success_attribute_next();
        await playwright_by_attribute_test_click(page, name22);
        await sleep_long();
        let json2 = json_to(second);
        log(app_replace_tests_run_e2e.name, {
          index,
        });
        return true;
      }
      await each_async(goals, lambda2);
      return true;
    }
    await each_async(rule_sets, lambda_each);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
