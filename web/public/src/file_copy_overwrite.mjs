import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
export async function file_copy_overwrite(file_path_new, file_path_old) {
  await file_parent_exists_ensure(file_path_new);
  let fs = await import("fs");
  await fs.promises.copyFile(file_path_old, file_path_new);
}
