import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_shared_url_dev_hash } from "../../../love/public/src/app_shared_url_dev_hash.mjs";
export async function playwright_test_app_dev_hash() {
  let url = await app_shared_url_dev_hash(app_replace, {
    d: 111,
  });
  let combined = text_combine(url_prefix, url);
  return combined;
}
