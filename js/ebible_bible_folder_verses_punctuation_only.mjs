import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_downloaded_page_stems } from "./ebible_version_downloaded_page_stems.mjs";
import { text_size } from "./text_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_verses_kept } from "./ebible_verses_kept.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_punctuation_removed } from "./text_punctuation_removed.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { ebible_chapter_verse_code } from "./ebible_chapter_verse_code.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_bible_folder_verses_punctuation_only(
  bible_folder,
) {
  "$plain bible_folder";
  "Every verse in one downloaded translation that carries punctuation and nothing else, named by chapter and verse, beside the marks it holds.";
  "★ IT READS THE WHOLE CUT AND NOT THE READING THAT DROPS. This is the class the has-words test used to be unable to see: that test took the square brackets off a verse and asked whether anything was left, and a translation that printed a bare full stop instead survived it and was carried all the way to a reader as a numbered line with nothing on it. That is mended - the test now takes off punctuation of every kind - and the mending is exactly why this asks the page for its whole cut rather than for the verses that survive the test. Asked of the survivors it would find none, every time, for ever, and read as a translation with nothing wrong with it. A measurement that cannot come back with anything is not a clean result.";
  "It reads the pages already on this disk and reaches nothing over the network. The last run that asked the network one question of every bible at once came back reporting six thousand fetch failures as gaps in the bibles, so a measurement of this shape is made from what is already here or not at all.";
  "A chapter that will not parse is left out and counted separately rather than read as holding no such verses, because a chapter nobody could read taught nobody anything about that translation.";
  arguments_assert(arguments, 1);
  let stems = await ebible_version_downloaded_page_stems(bible_folder);
  function chapter_stem_is(stem) {
    let size = text_size(stem);
    let longer = greater_than(size, 3);
    return longer;
  }
  let chapter_codes = list_filter(stems, chapter_stem_is);
  async function chapter_scan(chapter_code) {
    async function chapter_read() {
      let read = await ebible_verses_kept(bible_folder, chapter_code);
      return read;
    }
    let verses = await catch_null_async(chapter_read);
    let unread = null_is(verses);
    if (unread) {
      let r2 = {
        unreadable: chapter_code,
        found: [],
      };
      return r2;
    }
    function punctuation_only_is(verse) {
      let text = property_get(verse, "text");
      let trimmed = whitespace_normalize(text);
      let printed = text_empty_not_is(trimmed);
      if (printed) {
        let worded = text_punctuation_removed(trimmed);
        let bare = text_empty_is(worded);
        return bare;
      }
      return false;
    }
    let bare_verses = list_filter(verses, punctuation_only_is);
    function verse_named(verse) {
      let verse_number = property_get(verse, "verse_number");
      let code = ebible_chapter_verse_code(chapter_code, verse_number);
      let text = property_get(verse, "text");
      let marks = whitespace_normalize(text);
      let named = {
        code,
        marks,
      };
      return named;
    }
    let found = list_map(bare_verses, verse_named);
    let r3 = {
      unreadable: null,
      found,
    };
    return r3;
  }
  let scanned = await list_map_unordered_async(chapter_codes, chapter_scan);
  function found_get(measured) {
    let found = property_get(measured, "found");
    return found;
  }
  let nested = list_map(scanned, found_get);
  let verses = lists_combine(nested);
  function unreadable_get(measured) {
    let unreadable = property_get(measured, "unreadable");
    return unreadable;
  }
  let unreadable_each = list_map(scanned, unreadable_get);
  let chapters_unreadable = list_filter(unreadable_each, null_not_is);
  list_sort_text(chapters_unreadable);
  let r = {
    bible_folder,
    chapters: list_size(chapter_codes),
    chapters_unreadable,
    verses: list_size(verses),
    found: verses,
  };
  return r;
}
