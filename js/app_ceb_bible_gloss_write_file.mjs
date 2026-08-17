import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { gloss_write_file_generic } from "./gloss_write_file_generic.mjs";
export async function app_ceb_bible_gloss_write_file(chapter_code, verse_key) {
  "Save a Cebuano passage's authored word explanations from a JSON file, so the explanations - which carry braces, quote marks and apostrophes - never have to ride the command line.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let passages_read = app_ceb_bible_gloss_passages;
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_write_file_generic(
    chapter_code,
    verse_key,
    passages_read,
    fn,
  );
  return r;
}
