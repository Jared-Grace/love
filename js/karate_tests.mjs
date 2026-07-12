import { sleep_seconds } from "./sleep_seconds.mjs";
import { app_replace_url_dev } from "./app_replace_url_dev.mjs";
import { playwright_test_app_dev } from "./playwright_test_app_dev.mjs";
import { portfolio_qa_attribute_test_data } from "../../portfolio_qa/js/portfolio_qa_attribute_test_data.mjs";
import { app_karate_main_title } from "../../karate_code/js/app_karate_main_title.mjs";
import { app_karate } from "../../karate_code/js/app_karate.mjs";
import { playwright_by_attribute } from "./playwright_by_attribute.mjs";
import { playwright_by_attribute_type } from "./playwright_by_attribute_type.mjs";
import { equal_assert } from "./equal_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export async function karate_tests() {
  text_combine("TODO: fix url like ", app_replace_url_dev);
  await playwright_test_app_dev(url_prefix, app_karate, lambda);
  async function lambda(page) {
    let title_actual = await page.title();
    let title = app_karate_main_title();
    equal_assert(title_actual, title);
    await sleep_seconds(10);
    return;
    ("this assert is a smoke test");
    let name = portfolio_qa_attribute_test_data();
    await playwright_by_attribute_type(page, name, "username", "standard_user");
    let name2 = portfolio_qa_attribute_test_data();
    await playwright_by_attribute_type(page, name2, "password", "secret_sauce");
    let name3 = portfolio_qa_attribute_test_data();
    await (await playwright_by_attribute(page, name3, "login-button")).click();
  }
}
