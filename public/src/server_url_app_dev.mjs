import { server_url_app_dev_hash } from "../../../love/public/src/server_url_app_dev_hash.mjs";
export async function server_url_app_dev(app_fn) {
  const hash = {};
  const url = await server_url_app_dev_hash(app_fn, hash);
  return url;
}
