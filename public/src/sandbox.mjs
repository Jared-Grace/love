import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_filter_starts_with_any } from "./list_filter_starts_with_any.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { string_starts_with_space } from "./string_starts_with_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { string_ends_with_space } from "./string_ends_with_space.mjs";
import { string_trim_right } from "./string_trim_right.mjs";
import { each } from "./each.mjs";
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
  let fns = [
    string_starts_with_digit,
    string_starts_with_dot,
    string_starts_with_space,
  ];
  function lambda2(item2) {
    item2 = whitespace_normalize(item2);
    each(fns, lambda);
    function lambda(fn) {
      item2 = string_skip_while(fn, item2);
    }
    item2 = string_trim_right(string_ends_with_space, item2);
    return item2;
  }
  let mapped = list_map(split, lambda2);
  let bible_folder = ebible_folder_english();
  let books = await ebible_version_books(bible_folder);
  let mapped2 = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(mapped2, mapped);
  fe;
  if (false) {
  }
  return verse_references;
}
