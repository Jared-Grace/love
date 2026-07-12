import { app_shared_url_suffix_dev_hash } from "./app_shared_url_suffix_dev_hash.mjs";
export async function app_shared_url_dev(app_fn) {
  let hash = {};
  let url = await app_shared_url_suffix_dev_hash(app_fn, hash);
  return url;
}
