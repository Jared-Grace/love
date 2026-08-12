import { ebible_verse_browser_try } from "./ebible_verse_browser_try.mjs";
import { null_is } from "./null_is.mjs";
import { app_next_verse_missing_line } from "./app_next_verse_missing_line.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { property_get } from "./property_get.mjs";
export async function app_next_verse_lines(
  chapter_code,
  verse_number,
  languages_chosen,
  books,
) {
  "One verse as the lines a page shows for it: the reference somebody would say out loud, and then the verse itself in each language the link asked for.";
  "It stands on its own so that a page showing several verses shows each of them the way this page has always shown one - the same block, repeated - rather than growing a second way of writing a verse down for the case where there is more than one.";
  "A bible without this verse in it gets a line saying so rather than stopping the page. Asking for a verse that is not there used to throw from here, which is before anything is drawn, so a reader who chose Amharic beside English got neither of them and a stack trace instead - the language with the hole took down the language without one.";
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
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let mapped = await list_map_unordered_async(languages_chosen, lambda);
  list_add_first(mapped, reference);
  return mapped;
}
