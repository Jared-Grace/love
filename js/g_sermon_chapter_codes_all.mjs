import { g_sermon_write } from "./g_sermon_write.mjs";
import { app_g_bible } from "./app_g_bible.mjs";
import { local_function_path } from "./local_function_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_without_extension } from "./path_without_extension.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapter_codes_all() {
  "every chapter code that has a written sermon file, across both stores (the write store and the edited bible store)";
  let stores = [g_sermon_write, app_g_bible];
  let codes = [];
  for (let store of stores) {
    let dir = local_function_path(store, "");
    let files = await folder_read_files(dir);
    for (let file of files) {
      let code = path_without_extension(file);
      list_add(codes, code);
    }
  }
  return codes;
}
