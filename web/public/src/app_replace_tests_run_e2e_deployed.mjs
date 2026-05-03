import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_replace_url_suffix_dev_hash } from "../../../love/public/src/app_replace_url_suffix_dev_hash.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
import { app_replace_tests_run_e2e } from "../../../love/public/src/app_replace_tests_run_e2e.mjs";
import { firebase_project_url_jg } from "../../../love/public/src/firebase_project_url_jg.mjs";
export async function app_replace_tests_run_e2e_deployed() {
  let combined = firebase_project_url_jg();
  let url_prefix2 = server_url();
  let url_suffix = await app_replace_url_suffix_dev_hash();
  let url_prefix = text_combine(url_prefix2, url_suffix);
  await app_replace_tests_run_e2e(combined);
}
