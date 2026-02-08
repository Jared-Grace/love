import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function ebible_references_parse(bible_folders, file_path) {
  let contents = await file_read(file_path);
  let split = text_split_newline(contents);
  let list = await ebible_references_parse_lines(bible_folders, split);
  let joined = list_join_newline(list);
  return list;
}
