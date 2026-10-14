import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { list_first } from "./list_first.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
export async function app_shared_bible_books_audience(languages_chosen) {
  "The book names a pasted verse is headed with: those of the first bible chosen, because verses are copied to be shared, and the first bible is the one the paste puts first - the language the audience is assumed to read most easily, before the others make sense to them with the meaning fresh. The reader copying may not read that language at all; what they see on the screen is the app's own language, which is a different setting.";
  "With nothing chosen there is no bible to ask, and english is what a page falls back on everywhere else.";
  let none = list_empty_is(languages_chosen);
  if (none) {
    let books_en = await app_shared_bible_read_books_en();
    return books_en;
  }
  let audience = list_first(languages_chosen);
  let property_name = bible_folder_key();
  let bible_folder = property_get(audience, property_name);
  let books = await ebible_version_books_browser(bible_folder);
  return books;
}
