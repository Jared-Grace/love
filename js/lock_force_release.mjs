import { folder_delete } from "./folder_delete.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { lock_generic } from "./lock_generic.mjs";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
import { log_keep } from "./log_keep.mjs";
export async function lock_force_release(lock_name) {
  let f_path = folder_user_storage_function_path(lock_generic);
  let result = path_join([f_path, lock_name]);
  let lock_path = text_combine(result, ".lock");
  await folder_delete(lock_path);
  let message = text_combine("removed ", lock_path);
  log_keep(lock_force_release.name, message);
}
