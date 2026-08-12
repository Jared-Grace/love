export function ebible_index_flat_book_chapter_codes(list, book_code) {
  "The chapters one book has, read off a flat index of a whole bible.";
  "A chapter code carries its book at the front, so the book's chapters are the ones that start with it. Taking them from the index rather than from a count means a book that turns out to have a chapter more than somebody remembered is still covered.";
  let chapter_codes_all = list_map_property(list, "chapter_code");
  let unique = list_unique(chapter_codes_all);
  let chapter_codes = list_filter_starts_with(unique, book_code);
  return chapter_codes;
}
