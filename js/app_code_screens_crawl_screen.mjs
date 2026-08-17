import { app_code_screen_capture } from "./app_code_screen_capture.mjs";
import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_code_screens_crawl_screen(
  page,
  url_prefix,
  screen,
  records,
) {
  "open one screen the way somebody reaches it from a saved link - its own name in the address and no lesson chosen - and push what it renders onto records";
  "a unique query string on each load forces a fresh render, so the address is read rather than the screen the tab was last left on";
  arguments_assert(arguments, 4);
  let name = property_get(screen, "name");
  let key = app_code_screen_hash_key();
  let url = text_combine_multiple([
    url_prefix,
    "?s=",
    name,
    "#",
    key,
    "=",
    name,
  ]);
  await page.goto(url);
  await page.waitForTimeout(180);
  let record = await app_code_screen_capture(page);
  record.id = name;
  record.screen = "screen";
  record.kind = 0;
  list_add(records, record);
}
