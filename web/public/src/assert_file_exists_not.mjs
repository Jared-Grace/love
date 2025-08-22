import { error } from "./error.mjs";
import { file_exists } from "./file_exists.mjs";
export async function assert_file_exists_not(file_path_new) {
  if (await file_exists(file_path_new)) {
    error(file_path_new);
  }
}
