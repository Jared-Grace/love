import { error } from "../../../love/public/src/error.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev_hash } from "../../../love/public/src/playwright_test_app_dev_hash.mjs";
export async function app_replace_test_e2e(on_page) {
  let url_prefix = error();
  await playwright_test_app_dev_hash(
    url_prefix,
    app_replace,
    {
      d: 111,
    },
    on_page,
  );
}
