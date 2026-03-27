import { server_url_app_dev_hash } from "../../../love/public/src/server_url_app_dev_hash.mjs";
import { playwright_test_url } from "../../../love/public/src/playwright_test_url.mjs";
export async function playwright_test_app_dev_hash(app_fn, lambda) {
  const hash = {};
  let url = await server_url_app_dev_hash(app_fn, hash);
  await playwright_test_url(url, lambda);
}
