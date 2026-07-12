import { app_replace_tests_run_e2e_all } from "./app_replace_tests_run_e2e_all.mjs";
import { app_replace_tests_run_e2e_normal_fn } from "./app_replace_tests_run_e2e_normal_fn.mjs";
export async function app_replace_tests_run_e2e_normal(url_prefix) {
  let e2e_inner = app_replace_tests_run_e2e_normal_fn;
  await app_replace_tests_run_e2e_all(url_prefix, [e2e_inner]);
}
