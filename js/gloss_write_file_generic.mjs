import { fn_name } from "./fn_name.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { gloss_write_generic } from "./gloss_write_generic.mjs";
export async function gloss_write_file_generic(
  chapter_code,
  verse_key,
  passages_read,
  fn,
) {
  "Save a passage's authored word explanations from a JSON file, so the explanations - which carry braces, quote marks and apostrophes - never have to ride the command line.";
  "The file itself is written with the Write tool, which needs no prompt; this one reads it and stores it, and what it does is the same whatever it is asked for, so it is safe to grant.";
  ("Where the file sits is answered by ",
    fn_name("gloss_write_file_path"),
    ", which is also what tells an author where to write it.");
  ("$plain chapter_code");
  ("$plain verse_key");
  ("both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.");
  let path = gloss_write_file_path(chapter_code, verse_key, fn);
  let entries = await file_read_json(path);
  let r = await gloss_write_generic(
    chapter_code,
    verse_key,
    entries,
    passages_read,
    fn,
  );
  return r;
}
