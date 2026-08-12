import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
export function ebible_index_flat_book_chapter_codes(list, book_code) {
  "The chapters one book has, read off a flat index of a whole bible.";
  "A chapter code carries its book at the front, so the book's chapters are the ones that start with it. Taking them from the index rather than from a count means a book that turns out to have a chapter more than somebody remembered is still covered.";
  let unique = list_map_property_unique(list, "chapter_code");
  let chapter_codes = list_filter_starts_with(unique, book_code);
  return chapter_codes;
}
