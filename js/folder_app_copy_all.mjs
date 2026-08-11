import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { path_join } from "./path_join.mjs";
export async function folder_app_copy_all(from_folder, to_folder, app_name) {
  "$plain from_folder";
  "$plain to_folder";
  "$plain app_name";
  "Puts every piece of one app that is sitting in one folder into another folder under the same names, answering with the names it moved across.";
  "What the app is made of is asked of the folder holding it rather than named here, because a build decides for itself how many files to cut the app into and what to number them. A list written down here would be a guess made before the build ran, and the pieces it failed to guess would simply not travel - which is how a page arrived somewhere asking for a script that had never been sent after it.";
  "The names are answered rather than dropped so that whoever asked can say afterwards what this folder now holds because of this move, without asking the folder a second question it might answer differently.";
  let file_names = await folder_app_file_names(from_folder, app_name);
  async function copy_lambda(file_name) {
    let from = path_join([from_folder, file_name]);
    let to = path_join([to_folder, file_name]);
    await file_copy_overwrite(from, to);
    return file_name;
  }
  let copied = await list_map_unordered_async(file_names, copy_lambda);
  return copied;
}
