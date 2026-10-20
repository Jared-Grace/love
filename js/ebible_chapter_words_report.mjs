import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_chapter_verses_storage_outcome } from "./ebible_chapter_verses_storage_outcome.mjs";
import { false_is_assert } from "./false_is_assert.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { giveaway_bible_verses_words_text } from "./giveaway_bible_verses_words_text.mjs";
import { giveaway_bible_verses_numbered_text } from "./giveaway_bible_verses_numbered_text.mjs";
export async function ebible_chapter_words_report(book_code, chapter) {
  arguments_assert(arguments, 2);
  ("$plain book_code");
  ("$plain chapter");
  ("The words of one chapter of the Berean Standard Bible printed for reading - once as plain words and once with the verse numbers - for any book of the bible rather than only for the psalms.");
  ("★ THE READING IS CHECKED FOR BEING ABSENT AND FOR BEING UNREACHABLE BEFORE ANYTHING IS PRINTED, BECAUSE BOTH COME BACK AS NO VERSES. The store says which of the two it was and a renderer cannot - handed nothing it prints nothing and says nothing is wrong, so a chapter that merely failed to fetch reads exactly like a chapter that is not there. Unreachable is the common one rather than the rare one: a hundred bibles were once recorded as holding no readable verse of Luke 1 and twenty eight of them read in full when asked again the same morning.");
  ("The book is handed in as its three letter code and the chapter as a plain number, because that is what a person types. The padded code the chapter is stored under is built from the two of them here.");
  ("Nothing is written to disk and nothing is uploaded. This prints.");
  let bible_folder = "engbsb";
  let chapter_code = ebible_chapter_code_pad(book_code, chapter);
  let outcome = await ebible_chapter_verses_storage_outcome(
    bible_folder,
    chapter_code,
  );
  false_is_assert(outcome.absent);
  false_is_assert(outcome.unreachable);
  let verses = outcome.verses;
  list_empty_not_is_assert(verses);
  let words = giveaway_bible_verses_words_text(verses);
  let numbered = giveaway_bible_verses_numbered_text(verses);
  console.log("== words only");
  console.log(words);
  console.log("== words and verse numbers");
  console.log(numbered);
  let r = {
    chapter_code,
    verses_count: verses.length,
    words_length: words.length,
    numbered_length: numbered.length,
  };
  return r;
}
