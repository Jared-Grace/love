import { data_save } from "./data_save.mjs";
import { data_file_update_inner } from "./data_file_update_inner.mjs";
import { data_all } from "./data_all.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { each_async } from "./each_async.mjs";
export async function data_files_update() {
  let f_paths = functions_paths();
  var d = await data_all();
  async function lambda(f_path) {
    await data_file_update_inner(f_path, d);
  }
  await each_async(f_paths, lambda);
  await data_save(d);
}
