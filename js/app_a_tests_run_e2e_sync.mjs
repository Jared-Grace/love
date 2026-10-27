import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_stage_local } from "./app_shared_url_stage_local.mjs";
import { app_a } from "./app_a.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { fn_name } from "./fn_name.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { list_first } from "./list_first.mjs";
import { list_single } from "./list_single.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { file_read } from "./file_read.mjs";
import { list_last } from "./list_last.mjs";
import { text_includes_assert_json } from "./text_includes_assert_json.mjs";
export async function app_a_tests_run_e2e_sync(stage_name) {
  "$plain stage_name";
  "open the code editor in an empty browser, change one function and sync, and check the one change is what would be sent to this machine";
  "The sending is caught before it leaves the browser and answered as if it had worked, so the walk writes nothing to disk and commits nothing.";
  "It opens a fresh browser on purpose: the first visit is the one that copies the code into the page, and it is the visit that once never finished, and the visit after which opening a function once crashed because a settings file had not been copied.";
  "The stage is asked for so the folder about to be sent to people can be walked, not only the one somebody is working in; dev is the working one.";
  arguments_assert(arguments, 1);
  let url = await app_shared_url_stage_local(app_a, stage_name);
  function upload_is(request) {
    let left = request.method();
    let post_is = equal(left, "POST");
    if (not(post_is)) {
      return false;
    }
    ("A page that fails sends a report of the failure as a form rather than as json, so only json is read.");
    let headers = request.headers();
    let type = property_get(headers, "content-type");
    let json_is = text_includes(type, "json");
    if (not(json_is)) {
      return false;
    }
    let posted = request.postDataJSON();
    let f_name = property_get(posted, "f_name");
    let eq = equal(f_name, fn_name("app_a_upload"));
    return eq;
  }
  async function on_route(route) {
    let request = route.request();
    let caught = upload_is(request);
    if (caught) {
      await route.fulfill({
        json: {
          result: null,
        },
      });
      return;
    }
    await route.continue();
  }
  let text_after = '"js_e2e"';
  let body = null;
  async function on_page(page) {
    await page.route("**/*", on_route);
    await page.goto(url);
    let input = page.locator("input");
    await input.waitFor({
      timeout: 600000,
    });
    await input.fill(fn_name("folder_js"));
    await page.keyboard.press("Enter");
    let literal = page
      .getByText('"js"', {
        exact: true,
      })
      .first();
    await literal.click();
    await page.keyboard.press("e");
    let textarea = page.locator("textarea");
    await textarea.fill(text_after);
    let button = page
      .getByRole("button", {
        name: "Edit",
      })
      .last();
    await button.click();
    await page
      .getByText(text_after, {
        exact: true,
      })
      .first()
      .waitFor();
    let waited = page.waitForRequest(upload_is, {
      timeout: 600000,
    });
    await page.keyboard.press("s");
    let request = await waited;
    body = request.postDataJSON();
  }
  await playwright_test_blank(on_page);
  let args = property_get(body, "args");
  let deltas = list_first(args);
  let delta = list_single(deltas);
  let key = property_get(delta, "key");
  let key_expected = text_combine_multiple([
    "../love/js/",
    fn_name("folder_js"),
    ".mjs",
  ]);
  equal_assert_json(key, key_expected, {
    hint: "the one function changed in the page should be the one file sent",
  });
  let versions = property_get(delta, "versions");
  let before = list_first(versions);
  let disk = await file_read(key);
  equal_assert_json(before, disk, {
    hint: "what the page says the file held before the change should be what the disk holds, or the machine refuses the change",
  });
  let after = list_last(versions);
  text_includes_assert_json(after, text_after, {
    hint: "the file sent should hold the text typed in",
  });
  let r = {
    key,
    after,
  };
  return r;
}
