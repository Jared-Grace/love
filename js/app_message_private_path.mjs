import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { folder_private_storage_path } from "./folder_private_storage_path.mjs";
export function app_message_private_path(item) {
  "$plain item";
  "Where one message file sits on this machine, said from the handle it was listed through - the address it has in the bucket, answered as the address it has on disk.";
  "Two callers want this and want it to agree: the one that writes the file, and the one that asks whether the file is already written. Spelled twice, the asking and the writing would come to name different files, and the way that fails is a copy that downloads everything every time while reporting it only took what was missing - a run that looks exactly like a working one.";
  arguments_assert(arguments, 1);
  let name = property_get(item, "name");
  let f_path = folder_private_storage_path(name);
  return f_path;
}
