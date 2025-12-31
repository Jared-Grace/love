import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function love_initialize() {
  marker("1");
  let combined = folder_public_combine(f_path);
  let joined = path_join([segments]);
  await file_copy_overwrite(file_path_old, file_path_new);
}
