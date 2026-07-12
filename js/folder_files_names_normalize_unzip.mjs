import { unzip_self_multiple } from "./unzip_self_multiple.mjs";
import { folder_files_names_normalize } from "./folder_files_names_normalize.mjs";
export async function folder_files_names_normalize_unzip(
  path,
  include,
  prefix,
) {
  let files = await folder_files_names_normalize(path, include, prefix);
  await unzip_self_multiple(files);
  return files;
}
