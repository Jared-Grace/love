import { file_path_deciding_refuse } from "./file_path_deciding_refuse.mjs";
import { folder_public_root_blocked_assert } from "./folder_public_root_blocked_assert.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
export async function file_overwrite_buffer(file_path, contents) {
  await file_path_deciding_refuse(file_path);
  await folder_public_root_blocked_assert(file_path);
  let fs = await import("fs");
  await file_parent_exists_ensure(file_path);
  await fs.promises.writeFile(file_path, contents);
}
