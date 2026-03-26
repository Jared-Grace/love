import { app_replace_tests_run_e2e_all } from "../../../love/public/src/app_replace_tests_run_e2e_all.mjs";
import { app_replace_tests_run_e2e_hinted } from "../../../love/public/src/app_replace_tests_run_e2e_hinted.mjs";
import { app_replace_tests_run_e2e_normal } from "../../../love/public/src/app_replace_tests_run_e2e_normal.mjs";
export async function app_replace_tests_run_e2e() {
  await app_replace_tests_run_e2e_all(e2e_inner);
  await app_replace_tests_run_e2e_normal();
  await app_replace_tests_run_e2e_hinted();
}
