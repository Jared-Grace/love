import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
import { app_replace_test_url_hash_default } from "./app_replace_test_url_hash_default.mjs";
import { app_shared_url_suffix_hash } from "./app_shared_url_suffix_hash.mjs";
import { app_replace } from "./app_replace.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function cloudflare_site_app_replace_page_tests_run_e2e() {
  arguments_assert(arguments, 0);
  ("Runs the replace app's end to end tests against christarose.org, at the same path ",
    fn_name("app_replace_tests_run_e2e_deployed"),
    " walks on Firebase, so the two answers are about the same page at two addresses.");
  let url_prefix = cloudflare_site_url();
  let hash = app_replace_test_url_hash_default();
  let url_suffix = await app_shared_url_suffix_hash(app_replace, hash);
  let url = text_combine(url_prefix, url_suffix);
  await app_replace_tests_run_e2e(url);
}
