import { app_code_examples } from "./app_code_examples.mjs";
import { app_code_quiz } from "./app_code_quiz.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_code_screen_capture } from "./app_code_screen_capture.mjs";
import { app_code_screen_next_click_script } from "./app_code_screen_next_click_script.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_screens_crawl_lesson(
  page,
  url_prefix,
  id,
  records,
) {
  "crawl one lesson the way a learner meets it: its examples screen, then its quiz starting at the first kind and clicking Next through every following kind (forwards, backwards, unscramble, ...). A unique query string on each load forces a fresh render so the hash seeds the right screen. Stops walking when the lesson title changes, which means Next has carried us out of this lesson (into the next lesson or a review). Every screen is tagged and pushed onto records";
  let examples_url = text_combine_multiple([
    url_prefix,
    "?s=",
    id,
    "_e#lesson=",
    id,
    text_combine_multiple(["&screen=", app_code_examples.name]),
  ]);
  await page.goto(examples_url);
  await page.waitForTimeout(180);
  let examples = await app_code_screen_capture(page);
  examples.id = id;
  examples.screen = "examples";
  examples.kind = 0;
  list_add(records, examples);
  let quiz_url = text_combine_multiple([
    url_prefix,
    "?s=",
    id,
    "_q#lesson=",
    id,
    text_combine_multiple(["&screen=", app_code_quiz.name, "&quiz=0"]),
  ]);
  await page.goto(quiz_url);
  await page.waitForTimeout(180);
  let first = await app_code_screen_capture(page);
  first.id = id;
  first.screen = "quiz";
  first.kind = 0;
  list_add(records, first);
  let baseline = first.title;
  let script = app_code_screen_next_click_script();
  let kind = 1;
  while (less_than(kind, 8)) {
    let clicked = await page.evaluate(script);
    if (not(clicked)) {
      break;
    }
    await page.waitForTimeout(180);
    let rec = await app_code_screen_capture(page);
    let same = equal(rec.title, baseline);
    if (not(same)) {
      break;
    }
    rec.id = id;
    rec.screen = "quiz";
    rec.kind = kind;
    list_add(records, rec);
    kind = kind + 1;
  }
}
