import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { unzip } from "../../../love/public/src/unzip.mjs";
import { path_without_extension } from "../../../love/public/src/path_without_extension.mjs";
export async function unzip_self(file_path) {
  let name = path_without_extension(file_path);
  let e = await file_exists(name);
  if (e) {
    return;
  }
  await unzip(name, file_path);
  return name;
}
