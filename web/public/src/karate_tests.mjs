import { portfolio_qa_attribute_test_data } from "../../../portfolio_qa/public/src/portfolio_qa_attribute_test_data.mjs";
import { app_karate_main_title } from "../../../karate_code/public/src/app_karate_main_title.mjs";
import { server_url } from "../../../love/public/src/server_url.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_karate } from "../../../karate_code/public/src/app_karate.mjs";
import { app_prefix_without_fn } from "../../../love/public/src/app_prefix_without_fn.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { playwright_test_url } from "../../../love/public/src/playwright_test_url.mjs";
export async function karate_tests() {
  let app_fn = app_karate;
  let without = app_prefix_without_fn(app_fn);
  let r = await app_shared_name_search_info(without);
  let f_path_dev = property_get(r, "f_path_dev");
  let previous = folder_previous();
  let together = text_prefix_without(f_path_dev, previous);
  const url = server_url() + together + "";
  await playwright_test_url(url, lambda);
  async function lambda(page) {
    const title_actual = await page.title();
    const title = app_karate_main_title();
    equal_assert(title_actual, title);
    await sleep(10000);
    return;
    ("this assert is a smoke test");
    let name = portfolio_qa_attribute_test_data();
    await playwright_by_attribute_type(page, name, "username", "standard_user");
    let name2 = portfolio_qa_attribute_test_data();
    await playwright_by_attribute_type(page, name2, "password", "secret_sauce");
    let name3 = portfolio_qa_attribute_test_data();
    await playwright_by_attribute(page, name3, "login-button").click();
  }
}
