import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { file_exists_not_assert } from "../../../love/public/src/file_exists_not_assert.mjs";
export async function file_copy(file_path_old, file_path_new) {
  await file_exists_not_assert(file_path_new);
  await file_copy_overwrite(file_path_old, file_path_new);
}
