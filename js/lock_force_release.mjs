import { lock_folder_path } from "./lock_folder_path.mjs";
import { folder_delete } from "./folder_delete.mjs";
import { text_combine } from "./text_combine.mjs";
import { log_keep } from "./log_keep.mjs";
export async function lock_force_release(lock_name) {
  "Removes a named lock whatever holds it, for when the process that took it is gone and the lock outlived it.";
  let result = lock_folder_path(lock_name);
  let lock_path = text_combine(result, ".lock");
  await folder_delete(lock_path);
  let message = text_combine("removed ", lock_path);
  log_keep(lock_force_release.name, message);
}
