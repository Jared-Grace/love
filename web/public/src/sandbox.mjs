import { folder_files_names_normalize_unzip } from "../../../love/public/src/folder_files_names_normalize_unzip.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  await folder_files_names_normalize_unzip(path, () => {}, "woman_");
  await folder_files_names_normalize_unzip(path, () => {}, "man_");
}
