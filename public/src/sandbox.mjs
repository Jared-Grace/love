import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  const include = "woman";
  const prefix = "woman_";
  await folder_files_names_normalize(path, include, prefix);
  return files;
}
