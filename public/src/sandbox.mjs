import { string_split_newline } from "./string_split_newline.mjs";
import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("nations_mentioned.carm.org.txt");
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  return split;
}
