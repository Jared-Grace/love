import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function file_move(f_path_before, f_path_after) {
  marker("1");
  await file_copy(f_path_before, f_path_after);
  await file_delete(f_path_before);
}
