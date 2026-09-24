import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_folder_absolute } from "./web_assets_folder_absolute.mjs";
import { folder_read_recursive_async } from "./folder_read_recursive_async.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { path_join } from "./path_join.mjs";
import { file_size } from "./file_size.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export async function web_assets_sizes() {
  "Every asset there is, each said as one line holding where it sits and how many bytes it is, sorted, so that two readings of the folder can be compared as plain text.";
  "LENGTH RATHER THAN A HASH OF THE BYTES, because what is being watched for is a picture that was drawn again, and a picture drawn again is a different picture - it does not come back the same length. Hashing would read six megabytes of images on every run to answer what the lengths already answer, and would turn a record a person can read into a column of words nobody can.";
  "One line per file rather than a name pointing at a number, because the whole use of this is the difference between two readings, and a difference between two lists names the files that moved.";
  arguments_assert(arguments, 0);
  ("ONLY WHAT GIT KEEPS IS LISTED. The gates are judged in a copy that holds tracked files alone, so an ignored folder - the word recordings - is on this disk and absent there. Listed, it made the record name files that copy can never hold, and the gate went red in every judging and held every app back, while passing here. Measured 2026-09-24: seven hundred and twenty five recordings did exactly that. The cost is that re-recording an ignored file under the same name no longer asks for a new stamp; recordings are named after their own word, so a new word is already a new address. The rejected reading was keeping them and marking the gate as unjudgeable in the copy - that would have left the stamp unguarded for every picture as well.");
  let folder = web_assets_folder_absolute();
  let here = folder_current_absolute();
  let tracked = await git_files_tracked_folder(here);
  let relative = web_assets_folder_name();
  let found = await folder_read_recursive_async(folder);
  function tracked_is(p) {
    let from_root = path_join([relative, p]);
    let b = list_includes(tracked, from_root);
    return b;
  }
  let paths = list_filter(found, tracked_is);
  let lines = await list_map_async(paths, web_assets_sizes_line);
  list_sort_text(lines);
  return lines;
  async function web_assets_sizes_line(p) {
    let full = path_join([folder, p]);
    let size = await file_size(full);
    let line = list_join_empty([p, " ", size]);
    return line;
  }
}
