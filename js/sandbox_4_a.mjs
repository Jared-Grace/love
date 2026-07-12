import { property_get } from "./property_get.mjs";
import { file_read_folder_user_split_normalize } from "./file_read_folder_user_split_normalize.mjs";
import { list_filter_starts_with_any } from "./list_filter_starts_with_any.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_whitespace_normalize } from "./list_map_whitespace_normalize.mjs";
import { list_second } from "./list_second.mjs";
import { text_split_semicolon } from "./text_split_semicolon.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_split_comma } from "./list_map_split_comma.mjs";
export async function sandbox_4_a() {
  let path = "nations_mentioned.carm.org.txt";
  let r = await file_read_folder_user_split_normalize(path);
  let split = property_get(r, "split");
  let normalized = property_get(r, "normalized");
  let mapped3 = list_map_split_comma(normalized);
  async function lambda(item) {
    let first = list_first(item);
    let second = list_second(item);
    let split3 = text_split_semicolon(second);
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
