import { qa_app_stage_public_url } from "./qa_app_stage_public_url.mjs";
import { page_route_root_from_latest } from "./page_route_root_from_latest.mjs";
import { list_add } from "./list_add.mjs";
import { page_boot_arrive_wait } from "./page_boot_arrive_wait.mjs";
import { math_min } from "./math_min.mjs";
import { less_than } from "./less_than.mjs";
import { playwright_error_records_clear } from "./playwright_error_records_clear.mjs";
import { page_boot_wait_ms } from "./page_boot_wait_ms.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { not_equal } from "./not_equal.mjs";
import { playwright_error_records } from "./playwright_error_records.mjs";
import { page_boot_reasons } from "./page_boot_reasons.mjs";
import { greater_than } from "./greater_than.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function qa_app_stage_public_clicks_assert(app_name) {
  "opens the build waiting to go out at the public address, then presses each button its opening screen shows - once each, opening the page fresh before every press so one press cannot lead into the next. a press that throws, or leaves the page drawing nothing, stops the move up.";
  "only buttons, never links: a link leads to another page, and that page is checked when its own app goes out. a fresh open before every press keeps it one level deep, so no press can reach a send or save button that only appears after another press.";
  "the count is capped so a page of sixty chapter numbers costs a minute, not five; the first buttons are the ones a person sees first.";
  let url = qa_app_stage_public_url(app_name);
  let cap = 20;
  let failures = [];
  let pressed = [];
  let skipped = [];
  async function on_page(page) {
    await page_route_root_from_latest(page);
    let errors = [];
    function on_error(e) {
      let item = String(e);
      list_add(errors, item);
    }
    page.on("pageerror", on_error);
    async function open() {
      await page.goto("about:blank");
      await page.goto(url, {
        waitUntil: "domcontentloaded",
      });
      let r = await page_boot_arrive_wait(page);
      return r;
    }
    await open();
    let buttons = page.locator("button:visible");
    let count = await buttons.count();
    let shown = math_min(count, cap);
    for (let index = 0; less_than(index, shown); index++) {
      await open();
      ("the page writes what it caught into its own storage, and that storage outlives a fresh open - so it is emptied here, after the open, or one press's failure would be blamed on every press after it. the opening itself is the startup check's business.");
      await playwright_error_records_clear(page);
      errors.length = 0;
      let button = page.locator("button:visible").nth(index);
      ("each button is given the whole boot wait to appear, because a fresh open counts as arrived the moment it draws anything, and on bible the chapter numbers came after that: ten of seventeen were missing at the press and read as unpressable.");
      async function label_read() {
        let r2 = await button.innerText({
          timeout: page_boot_wait_ms(),
        });
        return r2;
      }
      let label = await catch_null_async(label_read);
      async function press() {
        await button.click({
          timeout: 3000,
        });
      }
      let refused = await catch_error_text_or_null_async(press);
      if (not_equal(refused, null)) {
        ("a button that cannot be pressed is reported, never dropped: a run that skipped thirteen of twenty in silence read exactly like a run that pressed them all.");
        list_add(skipped, {
          index,
          label,
        });
        continue;
      }
      list_add(pressed, label);
      await page.waitForTimeout(1000);
      let body_text = await page_boot_arrive_wait(page);
      let records = await playwright_error_records(page);
      for (let record of records) {
        list_add(errors, record.text);
      }
      let reasons = page_boot_reasons(body_text, errors);
      if (greater_than(reasons.length, 0)) {
        list_add(failures, {
          index,
          label,
          reasons,
          errors: errors.slice(),
          address_after: page.url(),
        });
      }
    }
  }
  await playwright_test_blank(on_page);
  list_empty_is_assert_json(failures, {
    hint: "a button on the opening screen of the build waiting to go out broke the page when pressed at the public address, so it was not moved up",
    app_name,
    url,
  });
  let result = {
    app_name,
    pressed,
    skipped,
  };
  return result;
}
