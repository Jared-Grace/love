import { g_sermon_write } from "./g_sermon_write.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
import { local_function_path } from "./local_function_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { g_sermon_passage_line_count } from "./g_sermon_passage_line_count.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapters_passage_lines() {
  "read every written sermon chapter across both stores; return a list where each item is one chapter's ordered passage line counts";
  let dir1 = local_function_path(g_sermon_write, "");
  let dir2 = local_function_path(app_g_bible, "");
  let dirs = [dir1, dir2];
  let chapters = [];
  for (let dir of dirs) {
    let files = await folder_read_files(dir);
    for (let file of files) {
      let file_path = path_join([dir, file]);
      let chapter = await file_read_json(file_path);
      let passages = property_get_or(chapter, "passages", []);
      let lines = list_map(passages, g_sermon_passage_line_count);
      list_add(chapters, lines);
    }
  }
  return chapters;
}
