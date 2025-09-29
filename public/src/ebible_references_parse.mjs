import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function ebible_references_parse(bible_folders, file_path) {
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  let list = await ebible_references_parse_lines(bible_folders, split);
  let joined = list_join_newline(list);
  await clipboard_copy(joined);
  return list;
}
