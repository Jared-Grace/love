import { list_map_prefix_any } from "../../../love/public/src/list_map_prefix_any.mjs";
import { list_filter_starts_with_any } from "../../../love/public/src/list_filter_starts_with_any.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
export async function ebible_references_names(bible_folder, lines) {
  let books = await ebible_version_books(bible_folder);
  let books_names = list_map_property(books, "text");
  let verse_references = list_filter_starts_with_any(books_names, lines);
  let book_names = list_map_prefix_any(verse_references, books_names);
  let v = {
    verse_references,
    books_names,
    books,
    book_names,
  };
  return v;
}
