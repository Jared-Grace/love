import { app_replace_tests_run_e2e_deployed_url } from "./app_replace_tests_run_e2e_deployed_url.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function app_replace_tests_run_e2e_deployed() {
  let url = await app_replace_tests_run_e2e_deployed_url();
  await app_replace_tests_run_e2e(url);
}
