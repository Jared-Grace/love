import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_latest_public_folders } from "./app_shared_latest_public_folders.mjs";
import { property_get } from "./property_get.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { folder_public_root_noting_set } from "./folder_public_root_noting_set.mjs";
import { path_join } from "./path_join.mjs";
import { file_delete } from "./file_delete.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_promoted_app_pieces_gone_forget } from "./qa_promoted_app_pieces_gone_forget.mjs";
import { folder_public_root_noting_clear } from "./folder_public_root_noting_clear.mjs";
export async function html_public_remove(search) {
  "$plain search";
  "Takes one app off the live site - its page, its script, and every numbered piece a build cut out of it - answering with what it took and which names its note forgot. The next sending then stops serving it.";
  "For an app that only works on this machine, so that the public site offers nothing that cannot load there.";
  "The pieces may be vouched for by a note of what the app was promoted as, so this run takes the entitlement to change that one app's pieces, and forgets the names it took away from that app's note before giving the entitlement back. Without the forgetting the note would name files that are gone, and the next sending would be refused for every app waiting beside it.";
  arguments_assert(arguments, 1);
  let folders = await app_shared_latest_public_folders(search);
  let a_name = property_get(folders, "a_name");
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
