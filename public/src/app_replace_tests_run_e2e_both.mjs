import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
import { app_replace_tests_run_e2e_hinted_fn } from "../../../love/public/src/app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_both() {
  let e2e_inner_fns = [
    app_replace_tests_run_e2e_normal_fn,
    app_replace_tests_run_e2e_hinted_fn,
  ];
  await app_replace_tests_run_e2e_all(e2e_inner_fns);
}
