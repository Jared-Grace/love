import { unzip } from "../../../love/public/src/unzip.mjs";
import { path_without_extension } from "../../../love/public/src/path_without_extension.mjs";
export async function unzip_self(file_path) {
  let name = path_without_extension(file_path);
  await unzip(name, file_path);
  return name;
}
