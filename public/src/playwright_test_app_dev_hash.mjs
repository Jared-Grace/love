import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { app_shared_url_dev_hash } from "../../../love/public/src/app_shared_url_dev_hash.mjs";
export async function playwright_test_app_dev_hash() {
  let url = await app_shared_url_dev_hash(app_replace, {
    d: 111,
  });
  return url;
}
