import { file_exists } from "./file_exists.mjs";
import { file_delete } from "./file_delete.mjs";
export async function file_delete_if_exists(file_path) {
  if (await file_exists(file_path)) {
    await file_delete(file_path);
  }
}
