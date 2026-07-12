import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { file_move } from "./file_move.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function folder_files_names_normalize(path, matches, prefix) {
  let files = await folder_read_files(path);
  let index = 1;
  async function lambda2(la) {
    async function lambda(name_old) {
      if (matches(name_old)) {
        let name_new = text_combine_multiple([prefix, index, ".zip"]);
        let path_new = path_join([path, name_new]);
        let path_old = path_join([path, name_old]);
        await file_move(path_old, path_new);
        la(path_new);
        index++;
      }
    }
    await each_async(files, lambda);
  }
  let list = await list_adder_async(lambda2);
  return list;
}
