import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_replace_url_suffix_stage_hash } from "./app_replace_url_suffix_stage_hash.mjs";
export async function app_replace_url_suffix_dev_hash() {
  "The part of the replace app's dev address that comes after the server, with the screen the tests start from already on the end of it.";
  "It names the working stage and asks the twin that takes any stage. Kept because three callers want that stage and no other, and saying so by name reads better at those three than passing a word that is always the same one.";
  arguments_assert(arguments, 0);
  let stage_name = app_shared_name_dev_text();
  let url_suffix = await app_replace_url_suffix_stage_hash(stage_name);
  return url_suffix;
}
