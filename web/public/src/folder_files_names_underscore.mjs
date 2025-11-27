import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_move } from "../../../love/public/src/file_move.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
export async function folder_files_names_underscore(path) {
  marker("1");
  let files = await folder_read_files(path);
  async function lambda2(la) {
    async function lambda(name_old) {
      let path_old = path_join([path, name_old]);
      let name_new = transform(name_old);
      let path_new = path_join([path, name_new]);
      await file_move(path_old, path_new);
      la(path_new);
    }
    await each_async(files, lambda);
  }
  let list = await list_adder_async(lambda2);
  return list;
  function transform(name_old) {
    let replaced = string_replace(name_old, " ", "_");
    return replaced;
  }
}
