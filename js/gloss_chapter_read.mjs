import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { not } from "./not.mjs";
export async function gloss_chapter_read(chapter_code, fn) {
  "One authored gloss chapter as it stands on disk, or nothing at all when nobody has authored it yet.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A question asked of a chapter as a whole cannot go through the passage walker beside this one, because that hands over a single passage at a time and is finished before the last of them is in. Anything laying one passage against another needs the chapter itself.";
  "Nothing is written here. Opening a file is not deciding to change it, and a reader that had to go through a writer to look at a chapter would be one edit away from writing one out by accident.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  if (not(exists)) {
    let absent = null;
    return absent;
  }
  let chapter = await file_read_json(path);
  return chapter;
}
