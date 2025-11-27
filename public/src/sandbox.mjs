import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  await folder_files_names_normalize(path, "woman", "woman_");
  await folder_files_names_normalize(path, "woman", "woman_");
  return files;
}
