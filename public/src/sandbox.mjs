import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let p = folder_user_docs_path("monothesism_wiki.txt");
  let contents = await file_read(file_path);
  return p;
}
