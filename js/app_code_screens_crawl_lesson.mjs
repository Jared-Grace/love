import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_includes } from "./text_includes.mjs";
import { less_than } from "./less_than.mjs";
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
  "the three words this address stands on are frozen, so each is read off the function holding it rather than spelled into the joined-up text - a word fused into a separator is invisible to everything that watches for a wording change";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let v = app_code_screen_hash_key();
  let f_name = fn_name("app_code_examples");
  let combined = text_combine_multiple(["&", v, "=", f_name]);
  let v2 = app_code_lesson_hash_key();
  let examples_url = text_combine_multiple([
    url_prefix,
    "?s=",
    id,
    "_e#",
    v2,
    "=",
    id,
    combined,
  ]);
  await page.goto(examples_url);
  await page.waitForTimeout(180);
  let examples = await app_code_screen_capture(page);
  examples.id = id;
  examples.screen = "examples";
  examples.kind = 0;
  list_add(records, examples);
  let v3 = app_code_screen_hash_key();
  let f_name2 = fn_name("app_code_quiz");
  let v4 = app_code_quiz_hash_key();
  let combined2 = text_combine_multiple(["&", v3, "=", f_name2, "&", v4, "=0"]);
  let v5 = app_code_lesson_hash_key();
  let quiz_url = text_combine_multiple([
    url_prefix,
    "?s=",
    id,
    "_q#",
    v5,
    "=",
    id,
    combined2,
  ]);
  await page.goto(quiz_url);
  await page.waitForTimeout(180);
  let first = await app_code_screen_capture(page);
  first.id = id;
  first.screen = "quiz";
  first.kind = 0;
  list_add(records, first);
  let v6 = app_code_screen_hash_key();
  let f_name3 = fn_name("app_code_quiz");
  let combined3 = text_combine_multiple(["&", v6, "=", f_name3]);
  let v7 = app_code_lesson_hash_key();
  let quiz_marker = text_combine_multiple([v7, "=", id, combined3]);
  let script = app_code_screen_next_click_script();
  let kind = 1;
  while (less_than(kind, 8)) {
    let clicked = await page.evaluate(script);
    if (not(clicked)) {
      break;
    }
    await page.waitForTimeout(180);
    ("detect leaving the lesson by the url, not the title: the title collapses to just the category (Operators) which is shared, so it can never mark a boundary. Next writes the new lesson and screen into the hash, so if the hash no longer names this lesson's quiz we have walked out of it - into the next lesson or a review - and stop before capturing that as a kind of this lesson");
    let url = page.url();
    let still = text_includes(url, quiz_marker);
    if (not(still)) {
      break;
    }
    let rec = await app_code_screen_capture(page);
    rec.id = id;
    rec.screen = "quiz";
    rec.kind = kind;
    list_add(records, rec);
    kind = kind + 1;
  }
}
