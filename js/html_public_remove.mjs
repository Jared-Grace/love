import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_latest_public_folders } from "./app_shared_latest_public_folders.mjs";
import { property_get } from "./property_get.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function html_public_remove(search) {
  "$plain search";
  "Takes one app off the live site - its page, its script, and every numbered piece a build cut out of it - answering with what it took. The next sending then stops serving it.";
  "For an app that only works on this machine, so that the public site offers nothing that cannot load there.";
  arguments_assert(arguments, 1);
  let folders = await app_shared_latest_public_folders(search);
  let a_name = property_get(folders, "a_name");
  let repo_name = property_get(folders, "repo_name");
  let public_relative = property_get(folders, "public_relative");
  let to_folder = repo_path_combine(repo_name, public_relative);
  let present = await folder_app_file_names(to_folder, a_name);
  async function delete_lambda(file_name) {
    let path = path_join([to_folder, file_name]);
    await file_delete(path);
    return file_name;
  }
  let deleted = await list_map_unordered_async(present, delete_lambda);
  return deleted;
}
