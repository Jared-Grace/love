import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { error_json } from "./error_json.mjs";
export async function gloss_write_file_misnamed_assert(
  chapter_code,
  verse_key,
  fn,
) {
  "Stop with the right name, and the names actually saved for the chapter, when a passage's hand-off file is not where the reader looks for it.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  "The file is named with every verse of the passage joined by dashes, and authors keep guessing the name another way: the comma the verses are typed with (2,3 for 2-3), or a range (32-34 for 32-33-34). The reader then said only that the right file was missing, and the author moved or copied the file with mv or cp, which asks the human every time. Measured 2026-11-01: five passages went that way, in two different spellings.";
  "So it shows the right name beside the files the chapter actually has, rather than guessing each wrong spelling in turn - a check for the comma alone was written first, and the next author wrote a range.";
  "It renames nothing itself: moving the file would mean deleting the misnamed copy, and a deleting command could not keep the grant that lets storing run unasked. Writing the file again under the right name needs no prompt at all, so that is what it asks for.";
  "A correctly named file is read as before, whatever else sits beside it. With nothing at all saved for the chapter it stays quiet too, and the read below says the file is missing, which is then the whole story.";
  let path = gloss_write_file_path(chapter_code, verse_key, fn);
  if (await file_exists(path)) {
    return;
  }
  let folder = gloss_write_folder(fn);
  let names = await folder_read_files(folder);
  let prefix = "gloss_" + chapter_code + "_";
  let saved = list_filter_starts_with(names, prefix);
  if (list_empty_is(saved)) {
    return;
  }
  error_json({
    path,
    saved,
    hint: "no file has the name this passage is read under. The name lists every verse of the passage joined by dashes - never a comma, never a range. Rename it with mv as a call of its own, both paths written whole and no flags, or write it again under exactly that name with the Write tool. Those two run unasked; cp, or mv with anything chained to it that has no rule, asks the human",
  });
}
