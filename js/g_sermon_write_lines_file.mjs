import { g_sermon_loop_folder } from "./g_sermon_loop_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_write_lines } from "./g_sermon_write_lines.mjs";
export async function g_sermon_write_lines_file(chapter_code, key) {
  "$plain chapter_code";
  "Save a verse's authored lines from a JSON file, so the nested JSON - which carries braces and apostrophes - never has to ride the command line. The lines file itself is written with the Write tool, which needs no prompt; this one reads it and stores it, and its behaviour is fixed whatever its arguments are, so it is safe to allow-list.";
  "The file is named by convention inside the sermon-loop folder, as lines then the chapter code then the verse key, joined by underscores, with any comma in the key turned into a dash.";
  let name = "lines_" + chapter_code + "_" + key.split(",").join("-") + ".json";
  let folder = g_sermon_loop_folder();
  let path = path_join([folder, name]);
  let lines = await file_read_json(path);
  let r = await g_sermon_write_lines(chapter_code, key, lines);
  return r;
}
