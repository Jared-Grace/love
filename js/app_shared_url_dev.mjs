import { app_shared_url_suffix_dev_hash } from "./app_shared_url_suffix_dev_hash.mjs";
export async function app_shared_url_dev(app_fn) {
  "The local address an app's dev build is served at, with nothing after the hash.";
  let hash = {};
  let url = await app_shared_url_suffix_dev_hash(app_fn, hash);
  return url;
}
