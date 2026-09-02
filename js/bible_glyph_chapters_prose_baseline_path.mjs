import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function bible_glyph_chapters_prose_baseline_path() {
  "Where this ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.";
  "IT SITS IN THE ROOM THE OTHER RECORDS SIT IN. The data folder has two rooms and a file at the top of it belongs to neither - this one is read to decide whether today's change may stand, so it is a given rather than a record of something that happened.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "bible_glyph_chapters_prose_baseline.json"]);
  return path;
}
