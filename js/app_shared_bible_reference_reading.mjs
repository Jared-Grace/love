import { app_shared_bible_folder_reading } from "./app_shared_bible_folder_reading.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_reference_reading(
  chapter_code,
  verse_numbers,
) {
  "What to call a passage in the language it is being read in - the book name, the chapter, and the verses if there are any, ready to be shown to a reader.";
  "It used to say the book in English whatever the reading was in, on the grounds that a button is not the reading and the buttons beside it are English. Reported by a reader: the chapter above them said JUAN and the way back to it said John, so the same book wore two names one tap apart and neither said it was the same book. A book name is not the wording of a button - it is the name of the place the button leads to, and the place has already been given a name on the screen the reader just came from.";
  "English is still the answer when nothing is chosen, which is what a reader who has chosen nothing is being shown anyway.";
  "The book names have to be fetched to be spelled, which is why this is the kind of thing that has to be waited for rather than simply worked out.";
  arguments_assert(arguments, 2);
  let folder = app_shared_bible_folder_reading();
  let books = await ebible_version_books_browser(folder);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  return reference;
}
