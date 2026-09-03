import { arguments_assert } from "./arguments_assert.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { app_shared_name_search_info_fn } from "./app_shared_name_search_info_fn.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_path_stage_served_named } from "./app_shared_path_stage_served_named.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_url_suffix_stage_hash(
  app_fn,
  stage_name,
  hash,
) {
  "$plain stage_name";
  "the part of an address that comes after the server: an app's page at one named stage, with a screen's own words already on the end of it.";
  "The stage is asked for rather than fixed, so that the same walk can be pointed at the folder somebody is working in or at the folder that is about to be sent to people. Those two hold the same pages built out of the same code, and until this took a stage there was no way to walk the second - so every walk answered about the first and the thing actually being sent was never opened at all.";
  arguments_assert(arguments, 3);
  let hash_url = hash_to_url(hash);
  let r = await app_shared_name_search_info_fn(app_fn);
  let a_name = property_get(r, "a_name");
  let served = app_shared_path_stage_served_named(stage_name, a_name);
  let suffix = text_combine_multiple([served, hash_url]);
  return suffix;
}
