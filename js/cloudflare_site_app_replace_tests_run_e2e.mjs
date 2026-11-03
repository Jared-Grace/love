import { arguments_assert } from "./arguments_assert.mjs";
import { cloudflare_site_url } from "./cloudflare_site_url.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { app_replace_url_suffix_stage_hash } from "./app_replace_url_suffix_stage_hash.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function cloudflare_site_app_replace_tests_run_e2e() {
  arguments_assert(arguments, 0);
  ("Runs the replace app's end to end tests against christarose.org, at the same path the Firebase twin walks, so the two answers are about the same page at two addresses.");
  let url_prefix = cloudflare_site_url();
  let stage_name = app_shared_name_latest_text();
  let url_suffix = await app_replace_url_suffix_stage_hash(stage_name);
  let url = text_combine(url_prefix, url_suffix);
  await app_replace_tests_run_e2e(url);
}
