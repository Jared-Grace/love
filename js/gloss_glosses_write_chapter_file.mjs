import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_glosses_write_chapter_file(chapter_code, fn) {
  "Where the new short English for a whole chapter's words is handed over at once: glosses, then the chapter code, and no verses after it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a file and nothing that runs.";
  "A chapter is read as a chapter and written as a chapter - the worksheet an author works from names every marked word of all fifty passages together - so handing the answer back one passage at a time turns one piece of work into fifty files. This is the same material under one name, keyed inside by the verses each passage covers.";
  "A name with no second underscore names no passage, and the walk that finds the per-passage hand-offs passes such a name over, so this file can sit in the same folder without being read as one of them.";
  let extension = json_extension();
  let name = "glosses_" + chapter_code + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
