import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_block_lines } from "./app_shared_bible_verse_block_lines.mjs";
import { app_shared_bible_entries_names_texts } from "./app_shared_bible_entries_names_texts.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { ebible_verse_browser_try } from "./ebible_verse_browser_try.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_next_verse_missing_line } from "./app_next_verse_missing_line.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_next_verse_block(
  chapter_code,
  verse_number,
  languages_chosen,
  books,
) {
  "One verse as the two things a page does with it: the pieces it is drawn from, and the lines it is written as when somebody carries it away.";
  "$plain chapter_code";
  "$plain verse_number";
  "It used to be lines alone, and the page put those on the screen as they stood - so a verse arrived as plain text, with no colour telling one bible from another, no tapping a word to look it up, and a right-to-left bible running the wrong way under whichever language happened to be chosen last. All of that already exists and is already shared; it was only ever missing here because what reached the screen was a string.";
  "The lines are still wanted, because they are what lands on a clipboard, and what is copied has been the same shape on every surface here for a while. So both come back and the page uses each for what it is for.";
  "A bible without this verse in it gets a line saying so rather than stopping the page. Asking for a verse that is not there used to throw from here, which is before anything is drawn, so a reader who chose Amharic beside English got neither of them and a stack trace instead - the language with the hole took down the language without one.";
  arguments_assert(arguments, 4);
  async function lambda(language) {
    let bible_folder = ebible_language_to_bible_folder(language);
    let d = await ebible_verse_browser_try(
      bible_folder,
      chapter_code,
      verse_number,
    );
    if (null_is(d)) {
      let missing = app_next_verse_missing_line(language);
      return missing;
    }
    let text = property_get(d, "text");
    return text;
  }
  let texts = await list_map_unordered_async(languages_chosen, lambda);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let names = list_map_property(languages_chosen, "name");
  let entries = app_shared_bible_entries_names_texts(names, texts);
  let lines = app_shared_bible_verse_block_lines(
    chapter_code,
    books,
    verse_number,
    texts,
  );
  let block = {
    reference: reference,
    entries: entries,
    lines: lines,
  };
  return block;
}
