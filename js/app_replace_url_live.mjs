import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { app_replace_url_suffix_stage_hash } from "./app_replace_url_suffix_stage_hash.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_replace_url_live() {
  "The address the replace app is served at to people, on the site itself rather than on this machine, with the screen the tests start from already on the end of it.";
  "Its path is the latest stage's own path, because that stage's folder is what gets sent - so the same walk can be pointed at the folder before it is sent and at the site after, and the two answers are about the same page.";
  arguments_assert(arguments, 0);
  let url_prefix = firebase_project_url_jg();
  let stage_name = app_shared_name_latest_text();
  let url_suffix = await app_replace_url_suffix_stage_hash(stage_name);
  let combined = text_combine(url_prefix, url_suffix);
  return combined;
}
