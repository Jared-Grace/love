import { digits } from "./digits.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { file_read } from "./file_read.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let file_path = folder_user_docs_path("bible_references.hopenation.org.txt");
  let contents = await file_read(file_path);
  let split = string_split_newline(contents);
  function lambda2(item2) {
    let d = digits();
    let any = list_any_starts_with(item2, d);
    if (any) {
    }
  }
  let mapped = list_map(split, lambda2);
}
