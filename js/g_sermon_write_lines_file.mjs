import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_write_lines } from "./g_sermon_write_lines.mjs";
export async function g_sermon_write_lines_file(chapter_code, key) {
  let name = "lines_" + chapter_code + "_" + key.split(",").join("-") + ".json";
  let path = "/media/j/JPM/user/storage/sermon_loop/" + name;
  let lines = await file_read_json(path);
  let r = await g_sermon_write_lines(chapter_code, key, lines);
  return r;
}
