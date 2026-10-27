import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_dev_local } from "./app_shared_url_dev_local.mjs";
import { app_a } from "./app_a.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function app_a_tests_run_e2e_sync() {
  "open the code editor in an empty browser, change one function and sync, and check the one change is what would be sent to this machine";
  "The sending is caught before it leaves the browser and answered as if it had worked, so the walk writes nothing to disk and commits nothing.";
  arguments_assert(arguments, 0);
  let url = await app_shared_url_dev_local(app_a);
  let uploads = [];
  let seen = null;
  async function on_route(route) {
    let request = route.request();
    let left = request.method();
    let post_is = equal(left, "POST");
    if (not(post_is)) {
      await route.continue();
      return;
    }
    let body = request.postDataJSON();
    let f_name = property_get(body, "f_name");
    let upload_is = equal(f_name, fn_name("app_a_upload"));
    if (upload_is) {
      list_add(uploads, body);
      await route.fulfill({
        json: {
          result: null,
        },
      });
      return;
    }
    await route.continue();
  }
  async function on_page(page) {
    await page.route("**/*", on_route);
    await page.goto(url);
    let input = page.locator("input");
    await input.waitFor({
      timeout: 600000,
    });
    await input.fill(fn_name("folder_js"));
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
    seen = await page.innerText("body");
  }
  await playwright_test_blank(on_page);
  let r = {
    seen,
    uploads,
  };
  return r;
}
