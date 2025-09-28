import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
export async function file_copy(file_path_old, file_path_new) {
  await assert_file_exists_not(file_path_new);
  await file_copy_overwrite(file_path_new, file_path_old);
}
