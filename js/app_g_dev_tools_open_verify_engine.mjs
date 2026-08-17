import { arguments_assert } from "./arguments_assert.mjs";
import { server_url } from "./server_url.mjs";
import { app_shared_url_dev } from "./app_shared_url_dev.mjs";
import { app_g } from "./app_g.mjs";
import { text_combine } from "./text_combine.mjs";
import { playwright_firefox } from "./playwright_firefox.mjs";
export async function app_g_dev_tools_open_verify_engine() {
  arguments_assert(arguments, 0);
  let url_prefix = server_url();
  let url_suffix = await app_shared_url_dev(app_g);
  let url = text_combine(url_prefix, url_suffix);
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  let r = {
    url,
    engine,
  };
  return r;
}
