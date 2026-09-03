import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_test_url_hash_default } from "./app_replace_test_url_hash_default.mjs";
import { app_shared_url_suffix_stage_hash } from "./app_shared_url_suffix_stage_hash.mjs";
import { app_replace } from "./app_replace.mjs";
export async function app_replace_url_suffix_stage_hash(stage_name) {
  "$plain stage_name";
  "The part of the replace app's address that comes after the server, at one named stage, with the screen the tests start from already on the end of it.";
  arguments_assert(arguments, 1);
  let hash = app_replace_test_url_hash_default();
  let url_suffix = await app_shared_url_suffix_stage_hash(
    app_replace,
    stage_name,
    hash,
  );
  return url_suffix;
}
