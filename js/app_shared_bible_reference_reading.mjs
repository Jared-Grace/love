import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_folder_interface } from "./app_shared_bible_folder_interface.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
export async function app_shared_bible_reference_reading(
  chapter_code,
  verse_numbers,
) {
  "What to call a passage on the screen - the book name, the chapter, and the verses if there are any - in the language the app is shown in.";
  "It once followed the last bible chosen, after a reader saw JUAN over a chapter and John on the way back to it. The human ruled 2026-11-08 that every name on the screen follows the app's own language instead, and the title follows the same one - so the same book still wears one name everywhere it is shown, and choosing another bible to read changes the verses and nothing else.";
  "The book names have to be fetched to be spelled, which is why this is the kind of thing that has to be waited for rather than simply worked out.";
  arguments_assert(arguments, 2);
  let folder = app_shared_bible_folder_interface();
  let books = await ebible_version_books_browser(folder);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  return reference;
}
