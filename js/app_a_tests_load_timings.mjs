import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_stage_local } from "./app_shared_url_stage_local.mjs";
import { app_a } from "./app_a.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { fn_name } from "./fn_name.mjs";
import { add } from "./add.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { subtract } from "./subtract.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function app_a_tests_load_timings(stage_name) {
  "$plain stage_name";
  "How long the code editor's first visit takes in an empty browser, split where the time goes: until the list of file names has arrived, and until the first screen can be typed into.";
  arguments_assert(arguments, 1);
  let url = await app_shared_url_stage_local(app_a, stage_name);
  let started = null;
  let names_arrived = null;
  let screen_ready = null;
  let screen_ready_again = null;
  let buttons = null;
  let store_read = null;
  let saved = null;
  let downloads = 0;
  async function on_page(page) {
    function on_response(response) {
      let request = response.request();
      let left = request.method();
      let post_is = equal(left, "POST");
      if (not(post_is)) {
        return;
      }
      let text = request.postData();
      let named = text_includes(text, fn_name("app_a_download"));
      if (named) {
        downloads = add(downloads, 1);
        if (equal(names_arrived, null)) {
          let left2 = date_now_milliseconds();
          names_arrived = subtract(left2, started);
        }
      }
    }
    page.on("response", on_response);
    started = date_now_milliseconds();
    await page.goto(url);
    let input = page.locator("input");
    await input.waitFor({
      timeout: 600000,
    });
    let left3 = date_now_milliseconds();
    screen_ready = subtract(left3, started);
    buttons = await page.locator("button").count();
    ("The names are kept once the flag is set; reloading sooner would only download them again.");
    ("Written as text because it runs inside the page, where none of this repo's functions exist.");
    let flagged = text_combine_multiple([
      'Object.keys(localStorage).some(k => k.includes("',
      fn_name("app_a_file_system_initialize"),
      '"))',
    ]);
    await page.waitForFunction(flagged, null, {
      timeout: 600000,
    });
    let left5 = date_now_milliseconds();
    saved = subtract(left5, started);
    ("A second visit has the names already, so what it still takes is the drawing alone.");
    let again = date_now_milliseconds();
    await page.reload();
    await input.waitFor({
      timeout: 600000,
    });
    let left4 = date_now_milliseconds();
    screen_ready_again = subtract(left4, again);
    ("Reading every saved record once, the way the list of names is read at startup.");
    ("Written as text because it runs inside the page, where none of this repo's functions exist.");
    let store_read_time =
      '(async () => { let db = await new Promise(r => { let o = indexedDB.open("files"); o.onsuccess = () => r(o.result); }); let t = performance.now(); let all = await new Promise(r => { let g = db.transaction("files").objectStore("files").getAll(); g.onsuccess = () => r(g.result); }); return { ms: Math.round(performance.now() - t), count: all.length, bytes: JSON.stringify(all).length }; })()';
    store_read = await page.evaluate(store_read_time);
  }
  await playwright_test_blank(on_page);
  let r = {
    names_arrived,
    screen_ready,
    screen_ready_again,
    buttons,
    store_read,
    saved,
    downloads,
  };
  return r;
}
