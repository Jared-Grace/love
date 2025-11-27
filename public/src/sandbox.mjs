import { folder_files_names_normalize_unzip } from "../../../love/public/src/folder_files_names_normalize_unzip.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  function lambda() {}
  await folder_files_names_normalize_unzip(path, lambda, "woman_");
  function lambda2() {}
  await folder_files_names_normalize_unzip(path, lambda2, "man_");
}
