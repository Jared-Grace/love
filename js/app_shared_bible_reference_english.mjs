import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_reference_english(
  chapter_code,
  verse_numbers,
) {
  "What to call a passage in English - the book name, the chapter, and the verses if there are any, ready to be shown to a reader.";
  "English rather than whatever the chapter is being read in, because this is the wording of a button rather than of the reading, and every button around it is in English too.";
  "The book names have to be fetched to be spelled, which is why this is the kind of thing that has to be waited for rather than simply worked out.";
  arguments_assert(arguments, 2);
  let folder = ebible_folder_english();
  let books = await ebible_version_books_browser(folder);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  return reference;
}
