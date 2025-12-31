import { marker } from "../../../love/public/src/marker.mjs";
import { file_parent_exists_ensure } from "../../../love/public/src/file_parent_exists_ensure.mjs";
export async function file_copy_overwrite(file_path_old, file_path_new) {
  marker("1");
  await file_parent_exists_ensure(file_path_new);
  let fs = await import("fs");
  await fs.promises.copyFile(file_path_old, file_path_new);
}
