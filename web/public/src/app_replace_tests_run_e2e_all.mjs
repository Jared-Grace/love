import { app_replace_tests_run_e2e_generic } from "../../../love/public/src/app_replace_tests_run_e2e_generic.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
export async function app_replace_tests_run_e2e_all(inner) {
  let rule_sets = app_replace_rule_sets();
  let first = list_first(rule_sets);
  await app_replace_tests_run_e2e_generic(first, goal, inner);
}
