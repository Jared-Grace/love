import { function_read } from "../../../love/public/src/function_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let p = folder_user_docs_path("monothesism_wiki.txt");
  let contents = await function_read(f_name);
  return p;
}
