import { app_replace_tests_run_e2e_all } from "./app_replace_tests_run_e2e_all.mjs";
import { app_replace_tests_run_e2e_hinted_fn } from "./app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_both(url_prefix) {
  let e2e_inner_fns = [
    app_replace_tests_run_e2e_normal_fn,
    app_replace_tests_run_e2e_hinted_fn,
  ];
  await app_replace_tests_run_e2e_all(url_prefix, e2e_inner_fns);
}
