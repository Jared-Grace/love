import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search_info_fn } from "./app_shared_name_search_info_fn.mjs";
import { app_replace } from "./app_replace.mjs";
import { property_get } from "./property_get.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { app_replace_test_url_hash_default } from "./app_replace_test_url_hash_default.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
import { server_static_latest_at_root_run } from "./server_static_latest_at_root_run.mjs";
export async function app_replace_tests_run_e2e_public() {
  "play the replacing game through, walking the latest build at the address the public opens it at, before it is put there";
  "2026-11-06: code was walked under latest, passed, went out, and threw for every learner, because a page decides what it shows by its address and nothing had walked the public one. The walk before a send is there to protect what the public gets, so it walks what the public gets.";
  arguments_assert(arguments, 0);
  let r = await app_shared_name_search_info_fn(app_replace);
  let a_name = property_get(r, "a_name");
  let file_name = file_name_html(a_name);
  let hash = app_replace_test_url_hash_default();
  let hash_url = hash_to_url(hash);
  async function lambda(url_server) {
    let url = text_combine_multiple([url_server, "/", file_name, hash_url]);
    await app_replace_tests_run_e2e(url);
  }
  await server_static_latest_at_root_run(lambda);
  return true;
}
