import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { app_replace_tests_run_e2e_generic } from "../../../love/public/src/app_replace_tests_run_e2e_generic.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_normal() {
  let rule_sets = app_replace_rule_sets();
  let first = list_first(rule_sets);
  async function lambda(rule_set) {
    await app_replace_tests_run_e2e_generic(
      [rule_set],
      rule_set,
      app_replace_tests_run_e2e_normal_fn,
    );
  }
  await each_unordered_async(rule_sets, lambda);
}
