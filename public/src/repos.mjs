import { folder_read_files } from "./folder_read_files.mjs";
import { marker } from "./marker.mjs";
export function repos() {
  marker("1");
  let files = folder_read_files("..");
  return files;
}
