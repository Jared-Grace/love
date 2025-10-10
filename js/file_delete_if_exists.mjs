import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_delete_if_exists(file_path) {
  marker("1");
  if (await file_exists(file_path)) {
    await file_delete(file_path);
  }
}
