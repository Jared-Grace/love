import { app_replace_tests_run_e2e_deployed_url } from "./app_replace_tests_run_e2e_deployed_url.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function app_replace_tests_run_e2e_deployed() {
  "Runs the replace app's end-to-end tests against the copy that is really deployed, rather than against one built here.";
  let url = await app_replace_tests_run_e2e_deployed_url();
  await app_replace_tests_run_e2e(url);
}
