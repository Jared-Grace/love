import { app_shared_url_suffix_hash } from "../../../love/public/src/app_shared_url_suffix_hash.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_replace_test_url_hash_default } from "../../../love/public/src/app_replace_test_url_hash_default.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_replace_tests_run_e2e } from "../../../love/public/src/app_replace_tests_run_e2e.mjs";
import { firebase_project_url_jg } from "../../../love/public/src/firebase_project_url_jg.mjs";
export async function app_replace_tests_run_e2e_deployed() {
  let combined = firebase_project_url_jg();
  let hash = app_replace_test_url_hash_default();
  let url_suffix = await app_shared_url_suffix_hash(app_replace, hash);
  let url_prefix = text_combine(combined, url_suffix);
  await app_replace_tests_run_e2e(combined);
}
