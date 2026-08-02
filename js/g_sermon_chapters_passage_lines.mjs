import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { g_sermon_passage_line_count } from "./g_sermon_passage_line_count.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapters_passage_lines() {
  "read every written sermon chapter across both stores; return a list where each item is one chapter's ordered passage line counts";
  let dir1 = storage_function_path(fn_name("g_sermon_write"), "");
  let f_name = g_sermon_edited_store_name();
  let dir2 = storage_function_path(f_name, "");
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
