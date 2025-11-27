import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_files_names_normalize_unzip(
  path,
  include,
  prefix,
) {
  marker("1");
  let v = await folder_files_names_normalize(path, include, prefix);
  return v;
}
