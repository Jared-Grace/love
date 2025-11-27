import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { file_move } from "../../../love/public/src/file_move.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
export async function folder_files_names_normalize(path, include, prefix) {
  let files = await folder_read_files(path);
  let index = 1;
  async function lambda2(la) {
    async function lambda(name_old) {
      let i = string_includes(name_old, include);
      if (i) {
        let name_new = prefix + index + ".zip";
        let path_new = path_join([path, name_new]);
        if (equal_not(name_old, name_new)) {
          let path_old = path_join([path, name_old]);
          await file_move(path_old, path_new);
        }
        la(path_new);
        index++;
      }
    }
    await each_async(files, lambda);
  }
  let list = await list_adder_async(lambda2);
  return list;
}
