import { app_original_bible_gloss_write } from "./app_original_bible_gloss_write.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function app_original_bible_gloss_write_file(
  chapter_code,
  verse_key,
) {
  "Save a passage's authored word explanations from a JSON file, so the explanations - which carry braces, quote marks and apostrophes - never have to ride the command line.";
  "The file itself is written with the Write tool, which needs no prompt; this one reads it and stores it, and what it does is the same whatever it is asked for, so it is safe to grant.";
  "The file is named by convention inside the gloss folder, as gloss then the chapter code then the verse key, joined by underscores, with any comma in the key turned into a dash.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  let dashed = verse_key.split(",").join("-");
  let extension = json_extension();
  let name = "gloss_" + chapter_code + "_" + dashed + extension;
  let folder = gloss_write_folder();
  let path = path_join([folder, name]);
  let entries = await file_read_json(path);
  let r = await app_original_bible_gloss_write(chapter_code, verse_key, entries);
  return r;
}
