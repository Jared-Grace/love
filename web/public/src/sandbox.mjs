import { log } from "./log.mjs";
import { list_set } from "./list_set.mjs";
import { list_second } from "./list_second.mjs";
import { string_split_semicolon } from "./string_split_semicolon.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
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
  let split2 = list_map(split, whitespace_normalize);
  let mapped3 = list_map_split_comma(split2);
  let mapped2 = list_map(mapped3, string_split_semicolon);
  function lambda(item) {
    let second = list_second(item);
    log(second);
    let split3 = string_split_semicolon(second);
    list_set(item, 1, split3);
  }
  let mapped = list_map(mapped3, lambda);
  return mapped;
}
