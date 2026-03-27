import { playwright_test_url } from "../../../love/public/src/playwright_test_url.mjs";
import { server_url_app_dev } from "../../../love/public/src/server_url_app_dev.mjs";
export async function playwright_test_app_dev_hash(app_fn, lambda) {
  const url = await server_url_app_dev(app_fn);
  await playwright_test_url(url, lambda);
}
