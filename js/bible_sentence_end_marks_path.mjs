import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function bible_sentence_end_marks_path() {
  "Where the record of which bibles mark the end of a sentence is kept.";
  let folder = findings_folder();
  let path = path_join([folder, "bible_sentence_end_marks.json"]);
  return path;
}
