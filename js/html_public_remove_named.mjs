import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { folder_public_root_noting_set } from "./folder_public_root_noting_set.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_promoted_app_pieces_gone_forget } from "./qa_promoted_app_pieces_gone_forget.mjs";
import { folder_public_root_noting_clear } from "./folder_public_root_noting_clear.mjs";
export async function html_public_remove_named(a_name) {
  "$plain a_name";
  arguments_assert(arguments, 1);
  ("Takes one app's built files out of the served folder, by the app's exact short name, and forgets what the promotion record said about them. Asks nothing of the app's code, so it still works once the functions have moved to a new name.");
  let to_folder = folder_public_absolute();
  let present = await folder_app_file_names(to_folder, a_name);
  folder_public_root_noting_set(a_name);
  async function delete_lambda(file_name) {
    let path = path_join([to_folder, file_name]);
    await file_delete(path);
    return file_name;
  }
  let deleted = await list_map_unordered_async(present, delete_lambda);
  let forgotten = await qa_promoted_app_pieces_gone_forget(a_name);
  folder_public_root_noting_clear();
  let r = {
    deleted,
    forgotten,
  };
  return r;
}
