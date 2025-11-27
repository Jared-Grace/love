import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_move } from "../../../love/public/src/file_move.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  const include = "woman";
  const prefix = "woman_";
  await sandbox_rename(path, include, prefix);
  return files;
  async function sandbox_rename(path, include, prefix) {
    let files = await folder_read_files(path);
    let index = 1;
    async function lambda(name_old) {
      let i = string_includes(name_old, include);
      if (i) {
        let name_new = prefix + index + ".zip";
        let path_old = path_join([path, name_old]);
        let path_new = path_join([path, name_new]);
        await file_move(path_old, path_new);
        i++;
      }
    }
    await each_async(files, lambda);
  }
}
