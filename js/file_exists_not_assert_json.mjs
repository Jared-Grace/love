import { error_json } from "./error_json.mjs";
import { file_exists } from "./file_exists.mjs";
export async function file_exists_not_assert_json(file_path_new, json) {
  if (await file_exists(file_path_new)) {
    error_json({
      file_path_new,
      json,
    });
  }
}
