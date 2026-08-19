import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_index_flat_book_codes } from "./ebible_index_flat_book_codes.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_index_flat_books_browser(list) {
  "The books to offer a reader who is walking this index: english's books, named and ordered the way english names them, kept to the ones the index actually has.";
  "The names come from english because they are the names the buttons are read in, and they stay english's even when nothing english was chosen - a book list is a way of finding a place, and this app writes its own labels in english everywhere else too.";
  "Which books are on offer comes from the index instead, because that is the only thing that knows what the reader's own bibles hold. Those two are separate questions and were being answered by the same list, which is why a reader who chose a bible of one book was still shown all sixty-six.";
  let version_english = ebible_folder_english();
  let books = await ebible_version_books_browser(version_english);
  let book_codes = ebible_index_flat_book_codes(list);
  function held_is(book) {
    let book_code = property_get(book, "book_code");
    let held = list_includes(book_codes, book_code);
    return held;
  }
  let books_held = list_filter(books, held_is);
  return books_held;
}
