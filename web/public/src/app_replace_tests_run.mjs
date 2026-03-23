import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { playwright_test_url } from "../../../love/public/src/playwright_test_url.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_set_verify_all } from "../../../love/public/src/app_replace_rule_set_verify_all.mjs";
export async function app_replace_tests_run() {
  let rule_sets = app_replace_rule_set_verify_all();
  await playwright_test_app_dev(app_replace, lambda_each);
  async function lambda_each(rule_set) {
    await playwright_test_url(url, lambda$page);
  }
  await each_async(rule_sets, lambda_each);
}
