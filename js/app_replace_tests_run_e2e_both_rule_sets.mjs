import { app_replace_tests_run_e2e_all_rule_sets } from "./app_replace_tests_run_e2e_all_rule_sets.mjs";
import { app_replace_tests_run_e2e_hinted_fn } from "./app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_both_rule_sets(
  url_prefix,
  rule_sets,
) {
  "$plain url_prefix";
  "Walks every goal twice, once solving it plainly and once taking the hint the page offers, so both ways of reaching the answer are proven.";
  "Which sets of rules those goals come from is received rather than looked up, because the page being tested is not always the page this code was built from.";
  let e2e_inner_fns = [
    app_replace_tests_run_e2e_normal_fn,
    app_replace_tests_run_e2e_hinted_fn,
  ];
  await app_replace_tests_run_e2e_all_rule_sets(
    url_prefix,
    e2e_inner_fns,
    rule_sets,
  );
}
