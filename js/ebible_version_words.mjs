import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { ebible_chapters_words } from "./ebible_chapters_words.mjs";
export async function ebible_version_words(bible_folder) {
  "$plain bible_folder";
  "Every different word one whole bible spells, lowercased, in alphabetical order, counting as one word whatever somebody explaining the passage would put on one button.";
  "★ THIS IS THE TEST OF WHETHER A THING IS A WORD AT ALL, WHICH IS A QUESTION AN EXPLANATION CANNOT ANSWER ABOUT ITSELF. Somebody explaining a verse may split a word to explain a piece of it - God's into God and s, non-Greeks into non and Greeks - and the piece then sits in the store looking exactly like a word, with a gloss of its own. Asked for a recording it gets one nobody can make, because no voice says a suffix aloud. The bible's own spelling settles it: a piece is a thing the text never writes on its own.";
  "It is the whole bible rather than the books already explained, because a word arrives here by somebody authoring a chapter and the test has to hold for the chapter authored tomorrow.";
  "The chapters are read once. Asking one book at a time and adding the answers up re-reads the whole bible for every book.";
  arguments_assert(arguments, 1);
  let chapters = await ebible_version_chapters_cache(bible_folder);
  let words = ebible_chapters_words(chapters);
  return words;
}
