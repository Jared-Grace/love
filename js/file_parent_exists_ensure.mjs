import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { file_root_exists_assert } from "./file_root_exists_assert.mjs";
export async function file_parent_exists_ensure(file_path) {
  await file_root_exists_assert(file_path);
  let path = await import("path");
  let dir = path.dirname(file_path);
  await folder_exists_ensure(dir);
}
