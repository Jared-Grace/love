import { folder_read } from "./folder_read.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { marker } from "./marker.mjs";
export async function repos() {
  marker("1");
  let files = folder_read_files("..");
  let all = await folder_read(path_folder);
  return files;
}
