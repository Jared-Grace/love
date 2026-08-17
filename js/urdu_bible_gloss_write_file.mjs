import { urdu_bible_gloss_generate } from "./urdu_bible_gloss_generate.mjs";
import { urdu_bible_gloss_passages } from "./urdu_bible_gloss_passages.mjs";
import { gloss_write_file_generic } from "./gloss_write_file_generic.mjs";
export async function urdu_bible_gloss_write_file(chapter_code, verse_key) {
  "Save a passage's English words explained in Urdu from a JSON file, so the explanations - which carry braces, quote marks and Urdu letters - never have to ride the command line.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let passages_read = urdu_bible_gloss_passages;
  let fn = urdu_bible_gloss_generate;
  let r = await gloss_write_file_generic(
    chapter_code,
    verse_key,
    passages_read,
    fn,
  );
  return r;
}
