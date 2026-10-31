import { gloss_chapter_file_path_prefixed } from "./gloss_chapter_file_path_prefixed.mjs";
export function gloss_quotes_chapter_file_path(chapter_code, fn) {
  "Where the corrected Bible quotes of one already-stored chapter are handed over: quotes, then the chapter code, in the store's own handover folder.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN35, chosen from the Bible's own book and chapter numbering. It names a file to read and nothing that runs.";
  "It is a name of its own rather than the authoring or the fill handover, because this file holds pairs of quotes and neither of those holds anything a pair could be mistaken for.";
  let path = gloss_chapter_file_path_prefixed("quotes_", chapter_code, fn);
  return path;
}
