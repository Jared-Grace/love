import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function lyric_video_hearings_path() {
  arguments_assert(arguments, 0);
  ("Where the record of what listening to each song turned up is kept.");
  ("★ THE NAME OF THAT FILE IS SPELLED IN ONE PLACE BECAUSE A WRONG SPELLING OF IT DOES NOT FAIL, IT ANSWERS. Three separate commands reach this record and a fourth is about to, and each of them treats a file that is not there as a record with nothing in it - which is the honest reading of a first run and the silent reading of a rename that got done in two files out of four. A path built once cannot be got right in some callers and wrong in others.");
  let folder = findings_folder();
  let path = path_join([folder, "lyric_video_hearings.json"]);
  return path;
}
