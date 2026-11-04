import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { bible_usfm_versions_english_public_domain } from "./bible_usfm_versions_english_public_domain.mjs";
import { reply_messages_inner_transform } from "./reply_messages_inner_transform.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { bible_usfm_version_book_text } from "./bible_usfm_version_book_text.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
export async function reply_bible_verse_wordings(chapter_code, verse_number) {
  "$plain chapter_code";
  "$plain verse_number";
  "Every different wording of one verse across the English Bibles nobody owns, each as plain lower-case words, the way a message is read. A Bible this disk cannot open, or one without this verse, is left out.";
  "It cuts at the verse marks and not by lines, because a printed line can hold two verses: the passage reader, which cuts by lines, answers 1 John 4:7 in the BSB with 4:8 still on it.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_number = ebible_chapter_code_to_name(chapter_code);
  let versions = await bible_usfm_versions_english_public_domain();
  function word_read(word) {
    let letters = reply_messages_inner_transform(word);
    let joined = list_join_empty(letters);
    return joined;
  }
  async function wording(entry) {
    async function usfm_read() {
      let usfm = await bible_usfm_version_book_text(entry.version, book_code);
      return usfm;
    }
    let usfm = await catch_null_async(usfm_read);
    if (null_is(usfm)) {
      return null;
    }
    let chapters = usfm_chapters_verses(usfm);
    let chapter = list_find_property(
      chapters,
      "chapter_number",
      chapter_number,
    );
    let verse = list_find_property_or_null(
      chapter.verses,
      "verse_number",
      verse_number,
    );
    if (null_is(verse)) {
      return null;
    }
    let words = text_split_space(verse.text);
    let read = list_map(words, word_read);
    let kept = list_filter(read, text_empty_not_is);
    let spaced = list_join_space(kept);
    return spaced;
  }
  let read_all = await list_map_async(versions, wording);
  let found = list_filter_null_not_is(read_all);
  let unique = list_unique(found);
  return unique;
}
