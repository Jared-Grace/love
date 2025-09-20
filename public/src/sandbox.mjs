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
  let mapped3 = list_map_split_comma(split);
  function lambda(item) {}
  let mapped = list_map(list, whitespace_normalize);
  return mapped3;
}
