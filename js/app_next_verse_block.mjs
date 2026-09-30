import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_verse_browser_try } from "./ebible_verse_browser_try.mjs";
import { null_is } from "./null_is.mjs";
import { bible_verse_words_none_token } from "./bible_verse_words_none_token.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_language_to_name } from "./ebible_language_to_name.mjs";
import { app_shared_bible_entries_names_texts } from "./app_shared_bible_entries_names_texts.mjs";
import { app_shared_bible_verse_block_lines } from "./app_shared_bible_verse_block_lines.mjs";
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
      ("A bible with no verse at this number hands back the same mark a bible that printed no words hands back, and every page already knows that mark: it is drawn in its own grey with a sentence of its own, it is left untappable because no word of scripture is in it, it turns into the longer note when no bible on the page has anything, and it never reaches a clipboard as itself. This used to be a sentence written out here instead, which is the one shape none of that reaches - what arrived at the screen was ordinary text, so it was drawn as scripture and copied as scripture.");
      ("The mark says there are no words and never says why, which is exactly as much as is known here. A number missing from a file is not proof the bible lacks the verse - Amharic joins verses into ranges and carries the words under a number of its own - so a mark of its own saying the verse is absent would be naming a reason it cannot stand behind.");
      let missing = bible_verse_words_none_token();
      return missing;
    }
    let text = property_get(d, "text");
    return text;
  }
  let texts = await list_map_unordered_async(languages_chosen, lambda);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  ("A link names its languages by their short codes, and a name over a verse has to be the language's own name - so each code is looked up one at a time rather than the list being turned into languages in one go. Turning the list over drops any code naming nothing, and a shorter list of names beside a full list of verses would put every name over the wrong verse.");
  let names = list_map(languages_chosen, ebible_language_to_name);
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
