import { file_exists } from "./file_exists.mjs";
import { folder_user_root } from "./folder_user_root.mjs";
export async function folder_user_mounted_is() {
  "Whether the drive holding the human's own files is plugged in and mounted right now.";
  "The answer changes while the machine is running, so it is asked of the disk each time rather than worked out once and kept.";
  let root = folder_user_root();
  let mounted = await file_exists(root);
  return mounted;
}
