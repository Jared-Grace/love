import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { app_shared_url_dev_hash } from "../../../love/public/src/app_shared_url_dev_hash.mjs";
import { playwright_test_url } from "../../../love/public/src/playwright_test_url.mjs";
export async function playwright_test_app_dev_hash(
  url_prefix,
  app_fn,
  hash,
  lambda,
) {
  let url = await app_shared_url_dev_hash(app_fn, hash);
  let combined = text_combine(left, right);
  await playwright_test_url(url, lambda);
}
