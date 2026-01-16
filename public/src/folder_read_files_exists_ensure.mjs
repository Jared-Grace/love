import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
export async function folder_read_files_exists_ensure(folder_path) {
  await folder_exists_ensure(folder_path);
  let files = await folder_read_files(folder_path);
  return files;
}
