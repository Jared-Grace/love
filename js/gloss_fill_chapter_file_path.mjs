import { json_extension } from "./json_extension.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { path_join } from "./path_join.mjs";
import { path_inside_folder_assert } from "./path_inside_folder_assert.mjs";
export function gloss_fill_chapter_file_path(chapter_code, fn) {
  "Where the meanings missing from one already-stored chapter are handed over: fill, then the chapter code, in the store's own handover folder.";
  "$plain chapter_code";
  "the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names a file to read and nothing that runs.";
  "★ IT IS A DIFFERENT NAME FROM THE AUTHORING HANDOVER ON PURPOSE. That file holds a whole verse's explanations and this one holds only the meanings missing from a verse, and the two are told apart by nothing in their contents - a list of explanations read as a run of fills would be matched against the blanks in order and would quietly write the wrong meanings onto the right words. Sharing one name would make that mistake possible on a chapter that was half authored and half mended.";
  "The name is built from a caller's word, so where it lands is checked rather than assumed, for the same reason its twin checks: a code that walks back out of the folder would choose a file nobody named, and that file is read and then taken away.";
  let extension = json_extension();
  let name = "fill_" + chapter_code + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  path_inside_folder_assert(folder, path);
  return path;
}
