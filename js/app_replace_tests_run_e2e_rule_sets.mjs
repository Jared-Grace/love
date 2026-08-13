import { app_replace_tests_run_e2e_both_rule_sets } from "./app_replace_tests_run_e2e_both_rule_sets.mjs";
import { app_replace_tests_run_e2e_next_rule_sets } from "./app_replace_tests_run_e2e_next_rule_sets.mjs";
export async function app_replace_tests_run_e2e_rule_sets(
  url_prefix,
  rule_sets,
) {
  "$plain url_prefix";
  "Runs the whole end to end suite over a page, against the sets of rules it is given rather than the ones this code was built with.";
  "The short walk comes first so that a page which cannot even move on to its second set of rules says so in a minute instead of an hour.";
  await app_replace_tests_run_e2e_next_rule_sets(url_prefix, rule_sets);
  await app_replace_tests_run_e2e_both_rule_sets(url_prefix, rule_sets);
}
