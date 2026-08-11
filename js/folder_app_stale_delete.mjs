import { file_delete } from "./file_delete.mjs";
import { file_name_app_chunk_is } from "./file_name_app_chunk_is.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { path_join } from "./path_join.mjs";
export async function folder_app_stale_delete(folder, app_name, kept) {
  "$plain folder";
  "$plain app_name";
  "Takes out of one folder the extra scripts of one app that the named pieces do not account for, answering with what it took out.";
  "A build is free to cut a piece of an app out into a file of its own, and it names that file with a number it chooses. Two builds of the same app can choose differently, so the extras of the older build are not all overwritten by the newer one - the ones the newer build did not name are simply left lying there.";
  "Left lying there they are worse than clutter. Every later question about which pieces this app is made of asks the folder, so the folder answers with two builds' worth and the app is described as something no build ever made.";
  "Only the extras are ever taken. The page and the script are left standing whatever is asked for, because a build writes both of them fresh every time and so neither can go stale - while taking the page away unmakes the app itself. An app is known to be here by its page sitting in that folder and by nothing else, so a folder cleared of the page before a build is a folder where that app cannot be found to build. That was tried, and the build stopped saying it could find no app of that name.";
  "Keeping nothing is then a fair thing to ask for, and is how a folder is cleared of one app's leftovers before it is built there fresh - the page stays, so the app is still there to build.";
  "What was taken out is answered rather than swallowed, because taking a file away from a folder somebody is about to read is the kind of thing they should be able to read back.";
  let present = await folder_app_file_names(folder, app_name);
  function chunk_lambda(file_name) {
    let chunk = file_name_app_chunk_is(file_name, app_name);
    return chunk;
  }
  let chunks = list_filter(present, chunk_lambda);
  let stale = list_without_multiple(chunks, kept);
  async function delete_lambda(file_name) {
    let path = path_join([folder, file_name]);
    await file_delete(path);
    return file_name;
  }
  let deleted = await list_map_unordered_async(stale, delete_lambda);
  return deleted;
}
