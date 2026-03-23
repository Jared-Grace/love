import { playwright_by_attribute_named } from "../../../portfolio_qa/public/src/playwright_by_attribute_named.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { playwright_by_attribute_test_exists_assert } from "../../../love/public/src/playwright_by_attribute_test_exists_assert.mjs";
import { app_replace_rule_set_attribute_refresh_count } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_count.mjs";
import { app_replace_rule_set_verify_goal_path } from "../../../love/public/src/app_replace_rule_set_verify_goal_path.mjs";
import { app_replace_rule_set_success_attribute_next } from "../../../love/public/src/app_replace_rule_set_success_attribute_next.mjs";
import { app_replace_rule_set_attribute_symbol } from "../../../love/public/src/app_replace_rule_set_attribute_symbol.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
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
        let refresh_count = 1;
        let r4 = app_replace_start_end_get(goal);
        let start = property_get(r4, "start");
        let end = property_get(r4, "end");
        let path = app_replace_rule_set_verify_goal_path(
          rules_parsed,
          start,
          end,
        );
        async function lambda3(p) {
          let locator = playwright_by_attribute_named(page, "data-test");
          function lambda5(elements, name) {
            function lambda4(el) {
              let r = el.getAttribute(name);
              return r;
            }
            let r2 = elements.map(lambda4);
            return r2;
          }
          const values = await locator.evaluateAll(lambda5, "data-test");
          log(app_replace_tests_run_e2e.name, {
            values,
          });
          let value3 =
            app_replace_rule_set_attribute_refresh_count(refresh_count);
          await playwright_by_attribute_test_exists_assert(page, value3);
          let rule = property_get(p, "rule");
          let index = property_get(p, "index");
          let original = property_get(rule, "original");
          await playwright_by_attribute_test_click(page, original);
          refresh_count++;
          let value = app_replace_rule_set_attribute_symbol(index);
          await playwright_by_attribute_test_click(page, value);
          refresh_count++;
        }
        log(app_replace_tests_run_e2e.name, {
          path,
        });
        await each_async(path, lambda3);
        let name = app_replace_rule_set_success_attribute_next();
        await playwright_by_attribute_test_click(page, name);
      }
      await each_async(goals, lambda2);
    }
    await each_async(rule_sets, lambda_each);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
