import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_shared_url_dev_local } from "./app_shared_url_dev_local.mjs";
export async function playwright_test_app_dev(app_fn, lambda) {
  "a fresh browser already looking at an app's dev page, for a test that wants to be handed the running app rather than told where it lives";
  "the WHOLE address is what a browser needs. It was being given the path on its own, which names nothing a browser can go to, so every test opened this way failed at its first line with a complaint about the address rather than about the app.";
  let url = await app_shared_url_dev_local(app_fn);
  await playwright_test_url(url, lambda);
}
