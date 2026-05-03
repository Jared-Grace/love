import { app_replace_tests_run_e2e } from "../../../love/public/src/app_replace_tests_run_e2e.mjs";
import { firebase_project_url_jg } from "../../../love/public/src/firebase_project_url_jg.mjs";
export async function app_replace_tests_run_e2e_deployed() {
  let combined = firebase_project_url_jg();
  await app_replace_tests_run_e2e(combined);
}
