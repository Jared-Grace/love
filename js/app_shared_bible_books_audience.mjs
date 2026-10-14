import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { list_last } from "./list_last.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
export async function app_shared_bible_books_audience(languages_chosen) {
  "The book names of the bible a reader's choice puts first in charge - the last one chosen, the same bible the reader's top bar and copy button name a book in - so a reference reads the same in every app that hands one out.";
  "With nothing chosen there is no bible to ask, and english is what a page falls back on everywhere else.";
  let none = list_empty_is(languages_chosen);
  if (none) {
    let books_en = await app_shared_bible_read_books_en();
    return books_en;
  }
  let primary = list_last(languages_chosen);
  let property_name = bible_folder_key();
  let bible_folder = property_get(primary, property_name);
  let books = await ebible_version_books_browser(bible_folder);
  return books;
}
