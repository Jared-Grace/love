import { playwright_by_attribute_test_exists_assert } from "../../../love/public/src/playwright_by_attribute_test_exists_assert.mjs";
import { app_replace_rule_set_success_attribute_completed } from "../../../love/public/src/app_replace_rule_set_success_attribute_completed.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
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
import { list_first } from "../../../love/public/src/list_first.mjs";
import { playwright_by_attribute_test_click } from "../../../love/public/src/playwright_by_attribute_test_click.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_tests_run_e2e_generic(rs, inner) {
  let rs_goals = property_get(rs, "goals");
  let rs_goal_first = list_first(rs_goals);
  let json = json_to(rs_goal_first);
  let first_name = property_get(rs, "name");
  let fns = app_replace_rule_sets_fns();
  let last = list_last(fns);
  let last_rs = last();
  async function lambda(page) {
    await playwright_by_attribute_test_click(page, first_name);
    await playwright_by_attribute_test_click(page, json);
    async function each_rule_set(rule_set) {
      let goals = property_get(rule_set, "goals");
      let goal_last = list_last(goals);
      let rules_parsed = app_replace_rule_set_rules_get(rule_set);
      async function each_goal(goal) {
        let refresh_count = 0;
        refresh_count =
          await app_replace_rule_set_attribute_refresh_count_assert(
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
          if (equal(goal, goal_last)) {
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
      await each_async(goals, each_goal);
    }
    await each_async(rule_sets, each_rule_set);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
