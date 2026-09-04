import { json_extension } from "./json_extension.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_affix_kinds_words_file_path(fn) {
  "Where the corrected explanations are written, one for each word whose standing explanation names a piece the dictionary gives no piece of.";
  "It is keyed by word alone and the repairs file next to it is keyed by chapter, and that difference is the whole reason both exist. A word's parts are the same wherever it was met, so the writing is per word; the store is corrected a chapter at a time, so the correcting is per chapter. Writing straight into the chapter-keyed file would have meant copying one sentence into forty places by hand.";
  "So this is the file a person writes in and the repairs file is generated from it. A sentence improved here is improved everywhere it landed, which a corrected copy in the repairs file could never be.";
  let extension = json_extension();
  let name = "gloss_affix_kinds_words" + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
