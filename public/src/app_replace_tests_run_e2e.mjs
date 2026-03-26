import { app_replace_tests_run_e2e_hinted_fn } from "../../../love/public/src/app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
import { app_replace_tests_run_e2e_hinted } from "../../../love/public/src/app_replace_tests_run_e2e_hinted.mjs";
import { app_replace_tests_run_e2e_normal } from "../../../love/public/src/app_replace_tests_run_e2e_normal.mjs";
export async function app_replace_tests_run_e2e() {
  let e2e_inner_fns = [
    app_replace_tests_run_e2e_normal_fn,
    app_replace_tests_run_e2e_hinted_fn,
  ];
  await app_replace_tests_run_e2e_all(e2e_inner_fns);
  await app_replace_tests_run_e2e_normal();
  await app_replace_tests_run_e2e_hinted();
}
