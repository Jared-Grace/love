import { list_map_first } from "../../../love/public/src/list_map_first.mjs";
import { list_map_filter_string_empty_not_is } from "../../../love/public/src/list_map_filter_string_empty_not_is.mjs";
import { list_map_split_space } from "../../../love/public/src/list_map_split_space.mjs";
import { list_map_prefix_without_any } from "../../../love/public/src/list_map_prefix_without_any.mjs";
import { list_map_prefix_any } from "../../../love/public/src/list_map_prefix_any.mjs";
import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function ebible_references_names(books, lines) {
  let books_names = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(books_names, lines);
  let book_names = list_map_prefix_any(verse_references, books_names);
  let mapped2 = list_map_prefix_without_any(verse_references, books_names);
  let mapped3 = list_map_split_space(mapped2);
  let mapped4 = list_map_filter_string_empty_not_is(mapped3);
  let chapter_verses_list = list_map_first(mapped4);
  let v = {
    verse_references,
    books_names,
    book_names,
    chapter_verses_list,
  };
  return v;
}
