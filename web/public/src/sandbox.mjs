import { list_map_whitespace_normalize } from "./list_map_whitespace_normalize.mjs";
import { list_second } from "./list_second.mjs";
import { string_split_semicolon } from "./string_split_semicolon.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_split_comma } from "./list_map_split_comma.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("nations_mentioned.carm.org.txt");
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  let split2 = list_map_whitespace_normalize(split);
  let mapped3 = list_map_split_comma(split2);
  function lambda(item) {
    let second = list_second(item);
    let split3 = string_split_semicolon(second);
    let mapped2 = list_map_whitespace_normalize(split3);
    return mapped2;
  }
  let mapped = list_map(mapped3, lambda);
  return mapped;
}
