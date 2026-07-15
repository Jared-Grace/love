import { app_replace_url_dev } from "./app_replace_url_dev.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function app_replace_tests_run_e2e_dev() {
  let url = await app_replace_url_dev();
  await app_replace_tests_run_e2e(url);
}
