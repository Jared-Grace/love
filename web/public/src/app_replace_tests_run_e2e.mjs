import { app_replace_tests_run_hinted } from "../../../love/public/src/app_replace_tests_run_hinted.mjs";
import { app_replace_tests_run_e2e_normal } from "../../../love/public/src/app_replace_tests_run_e2e_normal.mjs";
export async function app_replace_tests_run_e2e() {
  await app_replace_tests_run_e2e_normal();
  await app_replace_tests_run_hinted();
}
