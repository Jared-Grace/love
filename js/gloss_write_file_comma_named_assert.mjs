import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function gloss_write_file_comma_named_assert(
  chapter_code,
  verse_key,
  fn,
) {
  "Stop with the right name when a passage's hand-off file was saved with the comma its verses are typed with, rather than the dash the reader looks for.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  "The verses are typed with a comma on the command line and the file is named with a dash, so an author who names the file the way they typed it leaves it where nothing reads it. The reader then said only that the dashed file was missing, and the author renamed the file with mv, which asks the human every time. Measured 2026-11-01: three passages went that way.";
  "It renames nothing itself: moving the file would mean deleting the comma copy, and a deleting command could not keep the grant that lets storing run unasked. Writing the file again under the right name needs no prompt at all, so that is what it asks for.";
  "A dashed file that is there is read as before, whatever else sits beside it, so a passage named correctly is never stopped here.";
  let path = gloss_write_file_path(chapter_code, verse_key, fn);
  if (await file_exists(path)) {
    return;
  }
  let folder = gloss_write_folder(fn);
  let name = "gloss_" + chapter_code + "_" + verse_key + json_extension();
  let comma_path = path_join([folder, name]);
  await file_exists_not_assert_json(comma_path, {
    path,
    hint: "this file was saved with a comma in its name, but it is read under the name with a dash - write it again under that name with the Write tool, and do not rename it with mv, which asks the human",
  });
}
