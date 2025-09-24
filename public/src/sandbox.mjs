import { string_skip } from "./string_skip.mjs";
import { not } from "./not.mjs";
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
  function lambda2(item2) {
    while (true) {
      let any = string_starts_with_digit(item2);
      if (not(any)) {
        break;
      }
      item2 = string_skip(item2, 1);
    }
  }
  let mapped = list_map(split, lambda2);
}
