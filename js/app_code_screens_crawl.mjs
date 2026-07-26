import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_code_lesson_ids } from "./app_code_lesson_ids.mjs";
import { app_code_screens_crawl_lesson } from "./app_code_screens_crawl_lesson.mjs";
import { app_code_screens_crawl_summary } from "./app_code_screens_crawl_summary.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_screens_crawl(url_prefix) {
  "the durable regression crawler: walk EVERY code lesson (examples + every quiz kind via Next) in a headless browser, capturing each screen and collecting any javascript errors. url_prefix is the served code.html, e.g. http://localhost:8080/love/public/dev/code.html . Returns a compact summary of the mechanical failures (horizontal overflow, blank screens, page errors) - the deterministic half of the check; the captured text feeds the separate make-sense judge. Reuses the same playwright harness as the app-replace e2e tests";
  let ids = app_code_lesson_ids();
  let records = [];
  let errors = [];
  async function on_page(page) {
    function on_error(e) {
      let text = String(e);
      list_add(errors, text);
    }
    page.on("pageerror", on_error);
    async function crawl_one(id) {
      await app_code_screens_crawl_lesson(page, url_prefix, id, records);
    }
    await each_async(ids, crawl_one);
  }
  await playwright_test_url(url_prefix, on_page);
  let summary = app_code_screens_crawl_summary(records, errors);
  return summary;
}
