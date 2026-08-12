import { fn_name } from "./fn_name.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { app_original_bible_gloss_write } from "./app_original_bible_gloss_write.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function app_original_bible_gloss_write_file(
  chapter_code,
  verse_key,
) {
  "Save a passage's authored word explanations from a JSON file, so the explanations - which carry braces, quote marks and apostrophes - never have to ride the command line.";
  "The file itself is written with the Write tool, which needs no prompt; this one reads it and stores it, and what it does is the same whatever it is asked for, so it is safe to grant.";
  ("Where the file sits is answered by ",
    fn_name("gloss_write_file_path"),
    ", which is also what tells an author where to write it.");
  ("$plain chapter_code");
  ("$plain verse_key");
  ("both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.");
  let path = gloss_write_file_path(chapter_code, verse_key);
  let entries = await file_read_json(path);
  let r = await app_original_bible_gloss_write(
    chapter_code,
    verse_key,
    entries,
  );
  return r;
}
