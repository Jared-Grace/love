import { unzip_self_multiple } from "../../../love/public/src/unzip_self_multiple.mjs";
import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_files_names_normalize_unzip(
  path,
  include,
  prefix,
) {
  marker("1");
  let files = await folder_files_names_normalize(path, include, prefix);
  await unzip_self_multiple(files);
  return files;
}
