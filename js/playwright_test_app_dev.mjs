import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_shared_url_dev } from "./app_shared_url_dev.mjs";
export async function playwright_test_app_dev(url_prefix, app_fn, lambda) {
  let url = await app_shared_url_dev(app_fn);
  await playwright_test_url(url, lambda);
}
