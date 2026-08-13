import { list_unique } from "./list_unique.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_without_extension } from "./path_without_extension.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapter_codes_all() {
  "every chapter code that has a written sermon file, across both stores (the write store and the edited bible store), each named once";
  "DEDUPED because the stores stopped being disjoint. James and Romans were converted out of the edited store into the write store rather than moved, so both hold them, and a chapter named twice here is counted twice by everything downstream - the resume work-list, the day counts, the supply of preaching a plant is cut from. The write store is read first, so the surviving name is the current shape.";
  let v = g_sermon_edited_store_name();
  let f_name = fn_name("g_sermon_write");
  let stores = [f_name, v];
  let codes = [];
  for (let store of stores) {
    let dir = storage_function_path(store, "");
    let files = await folder_read_files(dir);
    for (let file of files) {
      let code = path_without_extension(file);
      list_add(codes, code);
    }
  }
  let unique = list_unique(codes);
  return unique;
}
