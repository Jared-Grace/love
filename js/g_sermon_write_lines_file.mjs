import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_write_lines } from "./g_sermon_write_lines.mjs";
// Save a verse's authored lines from a JSON file, so the nested-JSON lines
// (which contain {} and apostrophes) never have to ride the command line.
// The lines file is written with the Write tool (no prompt); this fn — fixed
// behaviour regardless of args, so safe to allow-list — reads it and writes.
// Convention path: sermon_loop/lines_<chapter>_<key>.json, key commas → dashes.
export async function g_sermon_write_lines_file(chapter_code, key) {
  let name = "lines_" + chapter_code + "_" + key.split(",").join("-") + ".json";
  let path = "/media/j/JPM/user/storage/sermon_loop/" + name;
  let lines = await file_read_json(path);
  return g_sermon_write_lines(chapter_code, key, lines);
}
