import { property_get } from "../../../love/public/src/property_get.mjs";
import { love_repo_initialize_paths } from "../../../love/public/src/love_repo_initialize_paths.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
export async function love_repo_initialize() {
  let r = love_repo_initialize_paths();
  let file_path_new = property_get(r, "file_path_new");
  let file_path_old = property_get(r, "file_path_old");
  await file_copy_overwrite(file_path_old, file_path_new);
}
