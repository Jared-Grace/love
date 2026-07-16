import { playwright_test_url } from "./playwright_test_url.mjs";
import { playwright_refresh } from "./playwright_refresh.mjs";
import { playwright_by_attribute_test_click } from "./playwright_by_attribute_test_click.mjs";
import { app_replace_rule_set_replace } from "./app_replace_rule_set_replace.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_replace_rule_set_verify_goal_path } from "./app_replace_rule_set_verify_goal_path.mjs";
import { app_replace_rule_set_attribute_refresh_count_assert } from "./app_replace_rule_set_attribute_refresh_count_assert.mjs";
import { app_replace_rule_set_attribute_refresh_click } from "./app_replace_rule_set_attribute_refresh_click.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_proof_state } from "./app_replace_tests_proof_state.mjs";
import { app_replace_tests_proof_rule_click } from "./app_replace_tests_proof_rule_click.mjs";
import { app_replace_tests_proof_present_wait } from "./app_replace_tests_proof_present_wait.mjs";
import { app_replace_tests_proof_start_over_click } from "./app_replace_tests_proof_start_over_click.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { each_async } from "./each_async.mjs";
import { json_to } from "./json_to.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
export async function app_replace_tests_proof(url) {
  "an interaction test for the proof rail on a goal whose rule repeats (a a becomes b b): with no rule chosen the whole solved proof glows green; choosing a rule narrows the green to just that rule's single usage - not its other usages; the proof survives a browser refresh; and start over clears it";
  async function on_page(page) {
    await playwright_refresh(page);
    let rule_set = app_replace_rule_set_replace();
    let name = property_get(rule_set, "name");
    let goals = property_get(rule_set, "goals");
    let goal = list_get(goals, 1);
    await playwright_by_attribute_test_click(page, name);
    await playwright_by_attribute_test_click(page, json_to(goal));
    let refresh_count = 0;
    refresh_count = await app_replace_rule_set_attribute_refresh_count_assert(
      refresh_count,
      page,
    );
    let rules = app_replace_rule_set_rules_get(rule_set);
    let start_end = app_replace_start_end_get(goal);
    let start = property_get(start_end, "start");
    let end = property_get(start_end, "end");
    let path = app_replace_rule_set_verify_goal_path(rules, start, end);
    let rule_original_previous = null;
    async function each_step(step) {
      let symbol_id = null;
      ({ refresh_count, symbol_id, rule_original_previous } =
        await app_replace_tests_run_e2e_normal_fn(
          step,
          refresh_count,
          page,
          rule_original_previous,
        ));
      refresh_count = await app_replace_rule_set_attribute_refresh_click(
        page,
        symbol_id,
        refresh_count,
      );
    }
    await each_async(path, each_step);
    let default_state = await app_replace_tests_proof_state(page);
    equal_assert_json(default_state, "a*a*|b*a*|b*b*", {
      hint: "with no rule chosen the whole solved proof glows green",
    });
    await app_replace_tests_proof_rule_click(page, 0);
    let first = await app_replace_tests_proof_state(page);
    equal_assert_json(first, "a*a|b*a|bb", {
      hint: "choosing step 1 highlights only its single usage - the first a and the b it becomes - and nothing in step 2's states",
    });
    await app_replace_tests_proof_rule_click(page, 1);
    let second = await app_replace_tests_proof_state(page);
    equal_assert_json(second, "aa|ba*|bb*", {
      hint: "choosing step 2 highlights only its single usage, not step 1's",
    });
    await page.reload();
    await app_replace_tests_proof_present_wait(page, true);
    let resumed = await app_replace_tests_proof_state(page);
    equal_assert_json(resumed, "a*a*|b*a*|b*b*", {
      hint: "the proof survives a browser refresh, back to the whole proof glowing",
    });
    await app_replace_tests_proof_start_over_click(page);
    await app_replace_tests_proof_present_wait(page, false);
    let cleared = await app_replace_tests_proof_state(page);
    equal_assert_json(cleared, "gone", {
      hint: "start over forgets the saved steps so the proof clears",
    });
  }
  await playwright_test_url(url, on_page);
}
