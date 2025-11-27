import { log } from "../../../love/public/src/log.mjs";
import { path_name } from "../../../love/public/src/path_name.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  let files = await folder_files_names_normalize(path, "woman", "woman_");
  async function lambda(file_path) {
    let name = path_name(file_path);
    log(name);
  }
  await each_async(files, lambda);
  await folder_files_names_normalize(path, "_man_", "man_");
}
