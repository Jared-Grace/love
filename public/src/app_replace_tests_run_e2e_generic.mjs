import { playwright_by_attribute_test_exists_assert } from "../../../love/public/src/playwright_by_attribute_test_exists_assert.mjs";
import { app_replace_rule_set_success_attribute_completed } from "../../../love/public/src/app_replace_rule_set_success_attribute_completed.mjs";
import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { app_replace_rule_set_success_attribute_next } from "../../../love/public/src/app_replace_rule_set_success_attribute_next.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_click.mjs";
import { app_replace_rule_set_verify_goal_path } from "../../../love/public/src/app_replace_rule_set_verify_goal_path.mjs";
import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { app_replace_rule_set_attribute_refresh_count_assert } from "../../../love/public/src/app_replace_rule_set_attribute_refresh_count_assert.mjs";
import { app_replace_rule_set_rules_get } from "../../../love/public/src/app_replace_rule_set_rules_get.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { playwright_by_attribute_test_click } from "../../../love/public/src/playwright_by_attribute_test_click.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_tests_run_e2e_generic(
  rule_set_name,
  goal,
  inner,
) {
  let json = json_to(goal);
  let fns = app_replace_rule_sets_fns();
  let last = list_last(fns);
  let last_rs = last();
  let goals = property_get(last_rs, "goals");
  let goal_last = list_last(goals);
  async function lambda(page) {
    await playwright_by_attribute_test_click(page, rule_set_name);
    await playwright_by_attribute_test_click(page, json);
    let rules_parsed = app_replace_rule_set_rules_get(rule_set);
    async function each_goal(goal) {
      let refresh_count = 0;
      refresh_count = await app_replace_rule_set_attribute_refresh_count_assert(
        refresh_count,
        page,
      );
      let se = app_replace_start_end_get(goal);
      let start = property_get(se, "start");
      let end = property_get(se, "end");
      let path = app_replace_rule_set_verify_goal_path(
        rules_parsed,
        start,
        end,
      );
      async function each_step(p) {
        let symbol_id = null;
        ({ refresh_count, symbol_id } = await inner(
          p,
          refresh_count,
          page,
          symbol_id,
        ));
        refresh_count = await app_replace_rule_set_attribute_refresh_click(
          page,
          symbol_id,
          refresh_count,
        );
      }
      await each_async(path, each_step);
      let last_goal = false;
      let eq2 = json_equal(rule_set, last_rs);
      if (eq2) {
        if (json_equal(goal, goal_last)) {
          last_goal = true;
        }
      }
      if (last_goal) {
        let a = app_replace_rule_set_success_attribute_completed();
        await playwright_by_attribute_test_exists_assert(page, a);
      } else {
        let name = app_replace_rule_set_success_attribute_next();
        await playwright_by_attribute_test_click(page, name);
      }
    }
    await each_goal(goal);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
