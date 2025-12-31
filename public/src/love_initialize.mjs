import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function love_initialize() {
  marker("1");
  await file_copy(file_path_old, file_path_new);
}
