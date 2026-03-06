import { list_map_whitespace_normalize } from "../../../love/public/src/list_map_whitespace_normalize.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function file_read_folder_user_split_normalize(path) {
  let file_path = folder_user_docs_path(path);
  let contents = await file_read(file_path);
  let split = text_split_newline(contents);
  let normalized = list_map_whitespace_normalize(split);
  let r = {
    normalized,
    split,
  };
  return r;
}
