import { qa_attribute_test_data } from "../../../love/public/src/qa_attribute_test_data.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { playwright_by_attribute_click } from "../../../love/public/src/playwright_by_attribute_click.mjs";
import { sleep_long } from "../../../portfolio_qa/public/src/sleep_long.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_set_verify_all } from "../../../love/public/src/app_replace_rule_set_verify_all.mjs";
export async function app_replace_tests_run() {
  let rule_sets = app_replace_rule_set_verify_all();
  async function lambda(page) {
    async function lambda_each(rule_set) {
      let name2 = property_get(rule_set, "name");
      const name = qa_attribute_test_data();
      await playwright_by_attribute_click(page, name, name2);
      await sleep_long();
      return true;
    }
    await each_async(rule_sets, lambda_each);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
