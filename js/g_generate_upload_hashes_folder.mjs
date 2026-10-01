import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
import { path_join } from "./path_join.mjs";
export function g_generate_upload_hashes_folder(fn) {
  "The folder where a record is kept of what each of one store's files looked like at the moment it was last sent up, named after the store's own function.";
  "IT SITS UNDER ITS OWN ROOT RATHER THAN BESIDE THE STORE, AND THAT IS NOT TIDINESS. A folder named after the store with a word stuck on the end would be a real function's store the day somebody writes a function by that name, and the two would then share one folder and overwrite each other without a word. A separate root cannot collide with a function store at all, whatever anybody is later called.";
  "It is also deliberately not inside the store, because the thing that sends the store up walks every file in the store folder and would find the records and send those too.";
  arguments_assert(arguments, 1);
  let root = folder_user_storage_path("uploaded");
  let joined = path_join([root, fn.name]);
  return joined;
}
