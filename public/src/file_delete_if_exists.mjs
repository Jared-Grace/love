import { file_exists } from "./file_exists.mjs";
import { file_delete } from "./file_delete.mjs";
import { marker } from "./marker.mjs";
export async function file_delete_if_exists(file_path) {
  marker("1");
  await file_exists(file_path2);
  if (false) {
  }
  let v = await file_delete(file_path);
  return v;
}
