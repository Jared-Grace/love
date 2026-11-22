import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_folder_interface } from "./app_shared_bible_folder_interface.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
export async function app_shared_bible_verse_reference_reading(
  chapter_code,
  verse_number,
) {
  "$plain chapter_code";
  "$plain verse_number";
  "the code names a chapter, like JHN03, and the number names a verse in it; both are only looked up.";
  "One verse written the way a person writes it - John 3:16 - with the book named in the language the app is shown in, the same names the screen uses.";
  arguments_assert(arguments, 2);
  let folder = app_shared_bible_folder_interface();
  let books = await ebible_version_books_browser(folder);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  return reference;
}
