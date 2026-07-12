import { file_backup } from "./file_backup.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function folder_user_docs_backup(file_name) {
  let file_path = folder_user_docs_path(file_name);
  await file_backup(file_path);
  return file_path;
}
