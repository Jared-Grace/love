import { playwright_test_url } from "../../../karate_code/public/src/playwright_test_url.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function sandbox_test() {
  const url = "https://www.saucedemo.com/";
  await playwright_test_url(url, lambda);
  async function lambda(page) {
    const title = await page.title();
    ("this assert is a smoke test");
    equal_assert(title, "Swag Labs");
    await playwright_by_attribute_type(
      page,
      "data-test",
      "username",
      "standard_user",
    );
    await playwright_by_attribute_type(
      page,
      "data-test",
      "password",
      "secret_sauce",
    );
    await playwright_by_attribute(page, "data-test", "login-button").click();
    await sleep(10000);
  }
}
