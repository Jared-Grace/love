import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_screen_capture } from "./app_code_screen_capture.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_screen_capture_record(
  page,
  url,
  id,
  screen,
  kind,
  records,
) {
  "Open one address, wait for what it draws to settle, capture the screen, say which lesson and which screen and which kind of it this is, and put it on the pile being gathered.";
  "Every screen a crawl of the lessons gathers arrives exactly this way, and the two crawlers each wrote the seven lines out. The three words said about a screen have to be spelled the same at every site or the pile cannot be read back as one thing - and nothing about writing them out by hand makes them agree.";
  "The wait is why this cannot be a matter of taste. A capture taken before the drawing has settled comes back holding the screen before it, which reads as a page that renders the wrong thing rather than as a measurement taken too early.";
  arguments_assert(arguments, 6);
  await page.goto(url);
  await page.waitForTimeout(180);
  let record = await app_code_screen_capture(page);
  record.id = id;
  record.screen = screen;
  record.kind = kind;
  list_add(records, record);
}
