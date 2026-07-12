import { app_replace_tests_run_e2e_hinted_fn } from "./app_replace_tests_run_e2e_hinted_fn.mjs";
import { app_replace_tests_run_e2e_all } from "./app_replace_tests_run_e2e_all.mjs";
export async function app_replace_tests_run_e2e_hinted(url_prefix) {
  await app_replace_tests_run_e2e_all(url_prefix, [
    app_replace_tests_run_e2e_hinted_fn,
  ]);
}
