import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_progress_storage_key } from "./app_code_progress_storage_key.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function app_code_home_scrolled_screenshot(
  f_path,
  width,
  height,
  y,
) {
  "$plain f_path";
  "$plain width";
  "$plain height";
  "$plain y";
  "Opens the code app's lesson list on the dev build as a learner who has finished the first lesson, scrolls the page down by y pixels, and saves a picture of what is showing - the bar at the top only carries the way on once a lesson is finished, and a fresh browser has finished none.";
  "A narrow width stands in for a phone with the text size turned up: the same words take more of the row.";
  let lessons = app_code_lessons();
  let first = list_first(lessons);
  let id = property_get(first, "id");
  let key_end = app_code_progress_storage_key();
  let url = "http://localhost:8080/dev/code.html";
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: number_from_text(height),
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    function mark(a) {
      let keys = Object.keys(localStorage);
      function lambda(k) {
        let r = k.endsWith(a.key_end);
        return r;
      }
      let key = keys.find(lambda);
      let record = {};
      record[a.id] = {
        complete: true,
      };
      let v = JSON.stringify({
        value: record,
      });
      localStorage.setItem(key, v);
    }
    await page.evaluate(mark, {
      key_end,
      id,
    });
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);
    function scroll(top) {
      window.scrollTo(0, top);
    }
    let number = number_from_text(y);
    await page.evaluate(scroll, number);
    await page.waitForTimeout(500);
    await page.screenshot({
      path: f_path,
    });
  }
  await playwright_test_blank(on_page);
}
