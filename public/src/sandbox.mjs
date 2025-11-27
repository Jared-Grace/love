import { path_without_extension } from "../../../love/public/src/path_without_extension.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  let files = await folder_files_names_normalize(path, "woman", "woman_");
  async function lambda(file_path) {
    let name = path_without_extension(file_path);
    log(name);
  }
  await each_async(files, lambda);
  await folder_files_names_normalize(path, "_man_", "man_");
}
