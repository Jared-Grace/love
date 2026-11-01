import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { bible_glyph_chapter_built_destination } from "./bible_glyph_chapter_built_destination.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { bible_original_words_strong_or_null } from "./bible_original_words_strong_or_null.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { biblehub_strong_url } from "./biblehub_strong_url.mjs";
export async function bible_word_strong_url_or_null(
  chapter_code,
  verse_number,
  word,
) {
  arguments_assert(arguments, 3);
  ("$plain chapter_code");
  ("$plain verse_number");
  ("$plain word");
  ("the code names a chapter the way the book divisions spell it, or is null where the caller does not know which chapter the word is in; the verse number says which verse; the word is one tapped word with its punctuation taken off. All are data and none runs.");
  ("BibleHub's page for a tapped Hebrew or Greek word, found by the word's Strong's number, or null when the word is not one whose number can be found.");
  ("THE NUMBER COMES FROM THE CHAPTER THE PICTURE BIBLE ALREADY SENDS FOR, which keeps every written word of every verse beside its number. No second table of numbers is built or uploaded for this; a word is matched by its letters among the written words of its own verse.");
  ("ONLY A WORD WRITTEN IN HEBREW OR GREEK LETTERS IS LOOKED UP. Any other word has no written original to match, and asking would send for a chapter on every English tap to find nothing.");
  ("A CHAPTER THAT CANNOT BE FETCHED ANSWERS NULL RATHER THAN THROWING, because the word card must still open with its other choices - a book outside the canon has no built chapter at all.");
  ("Rejected: a BibleHub search by the word itself, because BibleHub looks words up by number, and a word as a verse spells it - with and or the joined to it - is not a headword any search would find.");
  if (null_is(chapter_code)) {
    return null;
  }
  let original_script = /[֐-׿Ͱ-Ͽἀ-῿]/u.test(word);
  if (not(original_script)) {
    return null;
  }
  async function built_fetch() {
    let destination = bible_glyph_chapter_built_destination(chapter_code);
    let project_url = firebase_storage_url_project_jg();
    let built = await firebase_storage_download_json_decompress_cache(
      project_url,
      destination,
    );
    return built;
  }
  let built = await catch_null_async(built_fetch);
  if (null_is(built)) {
    return null;
  }
  ("THE VERSE IS FOUND BY ITS NUMBER READ AS TEXT ON BOTH SIDES. Measured 2026-11-01: the built chapter stores verse one as the number 1 and a reader hands it on as the text 1, so asking for either one as it came found nothing, and every word answered null.");
  let wanted = String(verse_number);
  let verse = null;
  for (let candidate of built.verses) {
    let left = String(candidate.verse_number);
    if (equal(left, wanted)) {
      verse = candidate;
      break;
    }
  }
  if (null_is(verse)) {
    return null;
  }
  let strong = bible_original_words_strong_or_null(
    verse.original_words ?? [],
    word,
  );
  if (null_is(strong)) {
    return null;
  }
  let testament_name = bible_chapter_testament_name(chapter_code);
  let url = biblehub_strong_url(testament_name, strong);
  return url;
}
