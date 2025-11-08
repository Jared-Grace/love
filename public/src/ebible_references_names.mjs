import { list_map_prefix_any } from "../../../love/public/src/list_map_prefix_any.mjs";
import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function ebible_references_names(books, lines) {
  let books_names = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(books_names, lines);
  let book_names = list_map_prefix_any(verse_references, books_names);
  let v = {
    verse_references,
    books_names,
    book_names,
  };
  return v;
}
