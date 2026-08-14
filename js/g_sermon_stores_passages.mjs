import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_stores_passages() {
  "Every written passage in both sermon stores, flat, each one still carrying the chapter and the verses it came from.";
  "Both stores are read, the written one and the edited one, because an approved passage is as much of this corpus as a draft.";
  "It hands back the passage whole - its scripture and its lines together - rather than one part of it, because that is what lets a reading that needs the two BESIDE each other have them. A reader wanting only the words can drop the rest; a reader given only the words cannot get the pairing back.";
  let dir1 = storage_function_path(fn_name("g_sermon_write"), "");
  let dir2 = storage_function_path(g_sermon_edited_store_name(), "");
  let dirs = [dir1, dir2];
  let passages_all = [];
  for (let dir of dirs) {
    let files = await folder_read_files(dir);
    for (let file of files) {
      let file_path = path_join([dir, file]);
      let chapter = await file_read_json(file_path);
      let chapter_code = property_get_or(chapter, "chapter_code", "");
      let passages = property_get_or(chapter, "passages", []);
      for (let passage of passages) {
        let placed = {
          chapter_code,
          verse_numbers: property_get_or(passage, "verse_numbers", []),
          scripture: property_get_or(passage, "scripture", ""),
          lines: property_get_or(passage, "lines", []),
        };
        list_add(passages_all, placed);
      }
    }
  }
  return passages_all;
}
