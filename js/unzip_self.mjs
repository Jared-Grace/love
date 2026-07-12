import { file_exists } from "./file_exists.mjs";
import { unzip } from "./unzip.mjs";
import { path_without_extension } from "./path_without_extension.mjs";
export async function unzip_self(file_path) {
  let name = path_without_extension(file_path);
  let e = await file_exists(name);
  if (e) {
    return;
  }
  await unzip(file_path, name);
  return name;
}
