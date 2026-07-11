import { folder_delete } from "../../../love/public/src/folder_delete.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { lock_generic } from "../../../love/public/src/lock_generic.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function lock_generic_force_release(lock_name) {
  let f_path = folder_user_storage_function_path(lock_generic);
  let result = path_join([f_path, lock_name]);
  let lock_path = text_combine(result, ".lock");
  await folder_delete(lock_path);
  log_keep(lock_generic_force_release.name, text_combine("removed ", lock_path));
}
