import { app_replace_tests_run_e2e_both } from "./app_replace_tests_run_e2e_both.mjs";
import { app_replace_tests_run_e2e_next } from "./app_replace_tests_run_e2e_next.mjs";
export async function app_replace_tests_run_e2e(url_prefix) {
  await app_replace_tests_run_e2e_next(url_prefix);
  await app_replace_tests_run_e2e_both(url_prefix);
}
