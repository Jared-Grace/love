import { app_shared_url_dev_hash } from "../../../love/public/src/app_shared_url_dev_hash.mjs";
export async function app_shared_url_dev(app_fn) {
  const hash = {};
  const url = await app_shared_url_dev_hash(app_fn, hash);
  return url;
}
