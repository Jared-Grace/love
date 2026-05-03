import { error } from "../../../love/public/src/error.mjs";
import { app_replace_tests_run_e2e_hinted_fn } from "../../../love/public/src/app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
export async function app_replace_tests_run_e2e_hinted() {
  let e2e_inner_fns = error();
  await app_replace_tests_run_e2e_all(
    [app_replace_tests_run_e2e_hinted_fn],
    e2e_inner_fns,
  );
}
