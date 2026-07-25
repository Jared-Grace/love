import { folder_user_storage_path } from "./folder_user_storage_path.mjs";
import { path_join } from "./path_join.mjs";
export function firebase_mirror_path(relative) {
  "local path for a Firebase-storage file: <storage>/firebase/<relative> — the 'firebase' folder declares this whole subtree mirrors Firebase Storage 1:1, so upload/download are straight copies (the folder name is local-only; the Firebase path is the bare relative)";
  let rooted = path_join(["firebase", relative]);
  let path = folder_user_storage_path(rooted);
  return path;
}
