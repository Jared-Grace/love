import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function folder_user_docs_read(input) {
  let file_path = folder_user_docs_path(input);
  let contents = await file_read(file_path);
  return contents;
}
