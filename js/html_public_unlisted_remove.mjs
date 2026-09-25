import { arguments_assert } from "./arguments_assert.mjs";
import { html_public_unlisted_folder } from "./html_public_unlisted_folder.mjs";
import { property_get } from "./property_get.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function html_public_unlisted_remove(search) {
  "$plain search";
  "Takes one app away from the unlinked address on the live site - its page, its script, and every numbered piece a build cut out of it - answering with what it took. The next sending then stops serving it there.";
  "That address is for handing one person a build without it going to everybody, so an app stands there only while somebody is holding its link; this is how one nobody holds is taken back.";
  "The pieces are asked of the folder rather than named, for the reason written where that is asked: a build names its extra pieces with numbers of its own choosing, and one left behind is served long after the page it belonged to is gone.";
  arguments_assert(arguments, 1);
  let folder = await html_public_unlisted_folder(search);
  let a_name = property_get(folder, "a_name");
  let to_folder = property_get(folder, "to_folder");
  let present = await folder_app_file_names(to_folder, a_name);
  async function delete_lambda(file_name) {
    let path = path_join([to_folder, file_name]);
    await file_delete(path);
    return file_name;
  }
  let deleted = await list_map_unordered_async(present, delete_lambda);
  return deleted;
}
