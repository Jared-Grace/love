import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_code_lesson_ids } from "./app_code_lesson_ids.mjs";
import { app_code_screens_crawl_lesson } from "./app_code_screens_crawl_lesson.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_screens_records(url_prefix) {
  "crawl every code lesson and return the raw capture { records, errors }: records is one entry per screen (examples plus each quiz kind, reached by clicking Next) carrying its text and mechanical signals, errors is any javascript error seen. The shared collection behind both the mechanical crawl summary and the text manifest";
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
  let collected = {
    records,
    errors,
  };
  return collected;
}
