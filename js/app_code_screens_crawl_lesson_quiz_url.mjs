import { app_code_screen_capture_record } from "./app_code_screen_capture_record.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
export async function app_code_screens_crawl_lesson_quiz_url(
  v,
  url_prefix,
  id,
  page,
  records,
) {
  arguments_assert(arguments, 5);
  let f_name = fn_name("app_code_examples");
  ("the pairs are joined with a comma, which is the shape the app itself now writes. A crawl that seeded a different shape would still open - both are read - but the mark it later looks for in the address would be spelled one way and the address the other, so the walk would stop after the first click and quietly capture one kind per lesson");
  let combined = text_combine_multiple([",", v, "=", f_name]);
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
  await app_code_screen_capture_record(
    page,
    examples_url,
    id,
    "examples",
    0,
    records,
  );
  let v3 = app_code_screen_hash_key();
  let f_name2 = fn_name("app_code_quiz");
  let v4 = app_code_quiz_hash_key();
  let combined2 = text_combine_multiple([",", v3, "=", f_name2, ",", v4, "=0"]);
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
  return quiz_url;
}
