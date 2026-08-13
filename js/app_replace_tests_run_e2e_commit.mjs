import { app_replace_rule_sets_commit } from "./app_replace_rule_sets_commit.mjs";
import { app_replace_tests_run_e2e_rule_sets } from "./app_replace_tests_run_e2e_rule_sets.mjs";
export async function app_replace_tests_run_e2e_commit(url_prefix, commit) {
  "$plain url_prefix";
  "$plain commit";
  "Runs the whole end to end suite over a page built at one commit, against the goals that commit offered.";
  "This is what a kept copy of an older build is tested with. The page and the goals then come from the same day, so a failure means the page is broken rather than that it is old.";
  let rule_sets = await app_replace_rule_sets_commit(commit);
  await app_replace_tests_run_e2e_rule_sets(url_prefix, rule_sets);
}
