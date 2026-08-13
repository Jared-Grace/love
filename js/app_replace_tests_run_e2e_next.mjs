import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_tests_run_e2e_next_rule_sets } from "./app_replace_tests_run_e2e_next_rule_sets.mjs";
export async function app_replace_tests_run_e2e_next(url) {
  "$plain url";
  "Walks the first two sets of rules on a page, as the app is written today.";
  "All this decides is which sets those are. The walking was moved next door so it could be pointed at a page built from a different day's rules.";
  let rule_sets = app_replace_rule_sets();
  await app_replace_tests_run_e2e_next_rule_sets(url, rule_sets);
}
