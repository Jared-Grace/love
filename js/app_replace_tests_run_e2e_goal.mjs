import { log_keep } from "./log_keep.mjs";
import { playwright_refresh } from "./playwright_refresh.mjs";
import { app_replace_rule_set_success_attribute_next } from "./app_replace_rule_set_success_attribute_next.mjs";
import { playwright_by_attribute_test_exists_assert } from "./playwright_by_attribute_test_exists_assert.mjs";
import { app_replace_rule_set_success_attribute_completed } from "./app_replace_rule_set_success_attribute_completed.mjs";
import { json_equal } from "./json_equal.mjs";
import { each_async } from "./each_async.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "./app_replace_rule_set_attribute_refresh_click.mjs";
import { app_replace_rule_set_verify_goal_path } from "./app_replace_rule_set_verify_goal_path.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_replace_rule_set_attribute_refresh_count_assert } from "./app_replace_rule_set_attribute_refresh_count_assert.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { playwright_by_attribute_test_click } from "./playwright_by_attribute_test_click.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
import { json_to } from "./json_to.mjs";
export async function app_replace_tests_run_e2e_goal(
  page,
  goal,
  rule_set,
  e2e_inner_fn,
) {
  "Drives one goal of the replacing game through a real browser: opens the page fresh, picks the rule set and then the goal by name, works out the run of steps that gets from the start to the end, and takes every one of them.";
  "What a single step actually does is handed in rather than written here, so the one walk serves more than one kind of checking. The walk itself - the refreshing, the counting of refreshes, the clicking on - is the part that is the same however the step is checked.";
  "Whether this was the end is decided by comparing the goal against the last goal of the last rule set. Being there means the whole course is done and the finishing mark has to be on the page; anywhere else there is a next to go on to. That comparison is why the last rule set is fetched at the top of a function that otherwise only knows about the one it was given.";
  "A failure is written down with the goal and the rule set it happened in, and then let through unchanged. A browser test that broke somewhere inside a hundred clicks says almost nothing by itself; which goal it was is the whole of what is needed before anybody can go and look.";
  try {
    log_keep(app_replace_tests_run_e2e_goal.name, {
      goal,
      e2e_inner_fn_name: e2e_inner_fn.name,
    });
    await playwright_refresh(page);
    let json = json_to(goal);
    let fns = app_replace_rule_sets_fns();
    let last = list_last(fns);
    let last_rs = last();
    let goals = property_get(last_rs, "goals");
    let goal_last = list_last(goals);
    let rule_set_name = property_get(rule_set, "name");
    await playwright_by_attribute_test_click(page, rule_set_name);
    await playwright_by_attribute_test_click(page, json);
    let rules_parsed = app_replace_rule_set_rules_get(rule_set);
    async function each_goal(goal_each) {
      let refresh_count = 0;
      refresh_count = await app_replace_rule_set_attribute_refresh_count_assert(
        refresh_count,
        page,
      );
      let se = app_replace_start_end_get(goal_each);
      let start = property_get(se, "start");
      let end = property_get(se, "end");
      let path = app_replace_rule_set_verify_goal_path(
        rules_parsed,
        start,
        end,
      );
      let rule_original_previous = null;
      async function each_step(p) {
        let symbol_id = null;
        ({ refresh_count, symbol_id, rule_original_previous } =
          await e2e_inner_fn(p, refresh_count, page, rule_original_previous));
        refresh_count = await app_replace_rule_set_attribute_refresh_click(
          page,
          symbol_id,
          refresh_count,
        );
      }
      await each_async(path, each_step);
      let last_goal = false;
      let eq = json_equal(rule_set, last_rs);
      if (eq) {
        if (json_equal(goal_each, goal_last)) {
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
  } catch (e) {
    log_keep(app_replace_tests_run_e2e_goal.name, {
      e,
      rule_set,
      goal,
      error: true,
      e2e_inner_fn_name: e2e_inner_fn.name,
    });
    throw e;
  }
}
