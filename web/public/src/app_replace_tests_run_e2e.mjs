import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { sleep_long } from "../../../portfolio_qa/public/src/sleep_long.mjs";
import { playwright_by_attribute_click } from "../../../love/public/src/playwright_by_attribute_click.mjs";
import { qa_attribute_test_data } from "../../../love/public/src/qa_attribute_test_data.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_replace_tests_run_e2e() {
  let rule_sets = app_replace_rule_sets();
  async function lambda(page) {
    let first = list_first(rule_sets);
    let name2 = property_get(first, "name");
    const name = qa_attribute_test_data();
    await playwright_by_attribute_click(page, name, name2);
    let goals = property_get(first, "goals");
    let first2 = list_first(list);
    async function lambda_each(rule_set) {
      await sleep_long();
      return true;
    }
    await each_async(rule_sets, lambda_each);
  }
  await playwright_test_app_dev(app_replace, lambda);
}
