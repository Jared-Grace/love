import { fn_name } from "./fn_name.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_without_extension } from "./path_without_extension.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapter_codes_all() {
  "every chapter code that has a written sermon file, across both stores (the write store and the edited bible store)";
  let v = g_sermon_edited_store_name();
  let stores = [fn_name("g_sermon_write"), v];
  let codes = [];
  for (let store of stores) {
    let dir = storage_function_path(store, "");
    let files = await folder_read_files(dir);
    for (let file of files) {
      let code = path_without_extension(file);
      list_add(codes, code);
    }
  }
  return codes;
}
