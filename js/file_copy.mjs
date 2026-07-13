import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function file_copy(file_path_old, file_path_new) {
  await file_exists_not_assert_json(file_path_new, {
    hint: "the destination already exists and copying would overwrite it",
  });
  await file_copy_overwrite(file_path_old, file_path_new);
}
