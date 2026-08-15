import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_stores_chapters() {
  "Every written chapter in both sermon stores, whole, in the order the stores and their files are met.";
  "Both stores are read, the written one and the edited one, because an approved chapter is as much of this corpus as a draft.";
  "The chapter is handed back whole rather than any one part of it, because the readings built on this want different parts - one wants the words, another wants the chapter each passage came from - and a reader given only one part cannot get the rest back. Two readings had opened both stores and walked every file of each themselves, which meant the answer to where the sermons are kept was written down twice; adding a third store would have been a change in two places, and the day one of them was missed the two readings would quietly have been reading different corpora.";
  let dir1 = storage_function_path(fn_name("g_sermon_write"), "");
  let dir2 = storage_function_path(g_sermon_edited_store_name(), "");
  let dirs = [dir1, dir2];
  let chapters = [];
  for (let dir of dirs) {
    let files = await folder_read_files(dir);
    for (let file of files) {
      let file_path = path_join([dir, file]);
      let chapter = await file_read_json(file_path);
      list_add(chapters, chapter);
    }
  }
  return chapters;
}
