import { json_extension } from "./json_extension.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { path_join } from "./path_join.mjs";
import { path_inside_folder_assert } from "./path_inside_folder_assert.mjs";
export function gloss_chapter_file_path_prefixed(prefix, chapter_code, fn) {
  "Where one chapter's handover file sits in the store's own handover folder: a word saying what the file holds, then the chapter code.";
  "$plain prefix";
  "the word the file name starts with, which is what tells two handovers of one chapter apart. It names a file and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names a file to read and nothing that runs.";
  "The name is built from a caller's word, so where it lands is checked rather than assumed, and checked here once for every kind of handover rather than once in each: a code that walks back out of the folder would choose a file nobody named, and that file is read and then taken away.";
  let extension = json_extension();
  let name = prefix + chapter_code + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  path_inside_folder_assert(folder, path);
  return path;
}
