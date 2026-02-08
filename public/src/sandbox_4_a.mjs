import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_whitespace_normalize } from "../../../love/public/src/list_map_whitespace_normalize.mjs";
import { list_second } from "../../../love/public/src/list_second.mjs";
import { string_split_semicolon } from "../../../love/public/src/string_split_semicolon.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_split_comma } from "../../../love/public/src/list_map_split_comma.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox_4_a() {
  let file_path = folder_user_docs_path("nations_mentioned.carm.org.txt");
  let contents = await file_read(file_path);
  let split = text_split_newline(contents);
  let split2 = list_map_whitespace_normalize(split);
  let mapped3 = list_map_split_comma(split2);
  async function lambda(item) {
    let first = list_first(item);
    let second = list_second(item);
    let split3 = string_split_semicolon(second);
    let mapped2 = list_map_whitespace_normalize(split3);
    async function lambda2(item2) {
      let books_all = await list_map_unordered_async(
        bible_folders,
        ebible_version_books,
      );
      let mapped = list_map_property(books, "text");
      let verse_references = list_filter_starts_with_any(split, mapped);
    }
    await each_async(list, lambda2);
    let v = [first, mapped2];
    return v;
  }
  let mapped = list_map(mapped3, lambda);
  return mapped;
}
