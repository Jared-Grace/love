import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_move } from "../../../love/public/src/file_move.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let p = "C:\\Users\\chris\\Downloads\\characters";
  let files = await folder_read_files(p);
  let index = 1;
  async function lambda(name_old) {
    let i = string_includes(name_old, "woman");
    if (i) {
      let name_new = "woman_" + index + ".zip";
      let path_old = path_join([p, name_old]);
      let path_new = path_join([p, name_new]);
      await file_move(f_name_before, f_name_after);
    }
  }
  await each_async(list, lambda);
  return files;
}
