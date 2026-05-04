import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { folder_user_docs_read } from "../../../love/public/src/folder_user_docs_read.mjs";
export async function folder_user_docs_read_lines(file_name) {
  let contents = await folder_user_docs_read(file_name);
  let split = text_split_newline(contents);
  return split;
}
