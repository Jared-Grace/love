import { json_extension } from "./json_extension.mjs";
import { g_sermon_loop_folder } from "./g_sermon_loop_folder.mjs";
import { path_join } from "./path_join.mjs";
export function g_sermon_lines_file_path(chapter_code, key) {
  "$plain chapter_code";
  "Where a verse's authored lines are kept as a file in the sermon-loop folder: lines, then the chapter code, then the verse key, joined by underscores, with any comma in the key turned into a dash.";
  let name =
    "lines_" + chapter_code + "_" + key.split(",").join("-") + json_extension();
  let folder = g_sermon_loop_folder();
  let path = path_join([folder, name]);
  return path;
}
