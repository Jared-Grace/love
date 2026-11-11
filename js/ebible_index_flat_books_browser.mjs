import { app_shared_bible_folder_interface } from "./app_shared_bible_folder_interface.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_index_flat_book_codes } from "./ebible_index_flat_book_codes.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_index_flat_books_browser(list) {
  "The books to offer a reader who is walking this index, named the way the app's own buttons are written, kept to the ones the index actually has.";
  "The names come from the bible of the language the buttons are read in, and stay that language's even when it was not chosen to read - a book list is a way of finding a place, and the reader finds it in the words the rest of the screen uses. That is English, except in an app that speaks to its reader in another language.";
  "Which books are on offer comes from the index instead, because that is the only thing that knows what the reader's own bibles hold. Those two are separate questions and were being answered by the same list, which is why a reader who chose a bible of one book was still shown all sixty-six.";
  let version_interface = app_shared_bible_folder_interface();
  let books = await ebible_version_books_browser(version_interface);
  let book_codes = ebible_index_flat_book_codes(list);
  function held_is(book) {
    let held = property_in_list(book, "book_code", book_codes);
    return held;
  }
  let books_held = list_filter(books, held_is);
  return books_held;
}
