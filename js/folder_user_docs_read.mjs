import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function folder_user_docs_read(file_name) {
  let file_path = folder_user_docs_path(file_name);
  let contents = await file_read(file_path);
  return contents;
}
