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
  let folder = web_assets_folder_absolute();
  let paths = await folder_read_recursive_async(folder);
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
