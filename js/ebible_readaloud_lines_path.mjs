import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function ebible_readaloud_lines_path() {
  "Where the record of the reading-aloud measurement is kept.";
  "The measuring walks every chapter of every bible on this machine's disk and parses each one, which takes the better part of an hour and cannot be done by a gate. So the answer is written down once and the gate reads the writing.";
  let folder = findings_folder();
  let p = path_join([folder, "ebible_readaloud_lines.json"]);
  return p;
}
