import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_tests_run_e2e_goal } from "../../../love/public/src/app_replace_tests_run_e2e_goal.mjs";
import { app_replace_tests_run_e2e_hinted_fn } from "../../../love/public/src/app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
export async function app_replace_tests_run_e2e() {
  let rule_sets = app_replace_rule_sets();
  let taken = list_take(rule_sets, 2);
  async function lambda(page) {
    async function lambda3(rule_set) {
      let goals = property_get(rule_set, "goals");
      async function lambda2(rule_sets) {
        await app_replace_tests_run_e2e_goal(
          page,
          goal,
          rule_set,
          e2e_inner_fn,
        );
      }
      await each_async(list, lambda2);
    }
    await each_async(taken, lambda3);
  }
  await playwright_test_app_dev(app_replace, lambda);
  let e2e_inner_fns = [
    app_replace_tests_run_e2e_normal_fn,
    app_replace_tests_run_e2e_hinted_fn,
  ];
  await app_replace_tests_run_e2e_all(e2e_inner_fns);
}
