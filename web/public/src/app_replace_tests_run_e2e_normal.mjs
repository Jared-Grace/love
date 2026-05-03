import { error } from "../../../love/public/src/error.mjs";
import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_normal() {
  let e2e_inner = app_replace_tests_run_e2e_normal_fn;
  let e2e_inner_fns = error();
  await app_replace_tests_run_e2e_all([e2e_inner], e2e_inner_fns);
}
