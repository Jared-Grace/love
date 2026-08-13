import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_tests_run_e2e_rule_sets } from "./app_replace_tests_run_e2e_rule_sets.mjs";
export async function app_replace_tests_run_e2e(url_prefix) {
  "$plain url_prefix";
  "Runs the whole end to end suite over a page, as the app is written today.";
  "All this decides is which sets of rules those are. The running was moved next door so it could be pointed at a page built from a different day's rules.";
  let rule_sets = app_replace_rule_sets();
  await app_replace_tests_run_e2e_rule_sets(url_prefix, rule_sets);
}
