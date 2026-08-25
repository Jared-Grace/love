import { sleep_seconds } from "./sleep_seconds.mjs";
import { playwright_test_app_dev } from "./playwright_test_app_dev.mjs";
import { portfolio_qa_attribute_test_data } from "../../portfolio_qa/js/portfolio_qa_attribute_test_data.mjs";
import { app_karate_main_title } from "../../karate_code/js/app_karate_main_title.mjs";
import { app_karate } from "../../karate_code/js/app_karate.mjs";
import { playwright_by_attribute } from "./playwright_by_attribute.mjs";
import { playwright_by_attribute_type } from "./playwright_by_attribute_type.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function karate_tests() {
  await playwright_test_app_dev(app_karate, lambda);
  async function lambda(page) {
    let title_actual = await page.title();
    let title = app_karate_main_title();
    equal_assert_json(title_actual, title, {
      hint: "the page title should match the app's expected title — did the app load the right screen?",
    });
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
