import { string_starts_with_dot } from "./string_starts_with_dot.mjs";
import { string_skip_while } from "./string_skip_while.mjs";
import { string_starts_with_digit } from "./string_starts_with_digit.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("bible_references.hopenation.org.txt");
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  let fns = [];
  function lambda2(item2) {
    item2 = string_skip_while(string_starts_with_digit, item2);
    return item2;
  }
  let mapped = list_map(split, lambda2);
  function lambda2(item2) {
    item2 = string_skip_while(string_starts_with_dot, item2);
    return item2;
  }
  let mapped2 = list_map(mapped, lambda2);
  return mapped;
}
