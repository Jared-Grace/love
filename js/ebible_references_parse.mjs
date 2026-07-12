import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { file_read } from "./file_read.mjs";
export async function ebible_references_parse(bible_folders, file_path) {
  let contents = await file_read(file_path);
  let split = text_split_newline(contents);
  let list = await ebible_references_parse_lines(bible_folders, split);
  let joined = list_join_newline(list);
  return list;
}
