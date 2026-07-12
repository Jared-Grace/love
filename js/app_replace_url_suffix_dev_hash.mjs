import { app_replace_test_url_hash_default } from "./app_replace_test_url_hash_default.mjs";
import { app_replace } from "./app_replace.mjs";
import { app_shared_url_suffix_dev_hash } from "./app_shared_url_suffix_dev_hash.mjs";
export async function app_replace_url_suffix_dev_hash() {
  let hash = app_replace_test_url_hash_default();
  let url_suffix = await app_shared_url_suffix_dev_hash(app_replace, hash);
  return url_suffix;
}
