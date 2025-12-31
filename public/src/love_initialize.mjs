import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function love_initialize() {
  marker("1");
  await file_copy_overwrite(file_path_old, file_path_new);
}
