import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_book_verses_numbered_text(
  bible_folder,
  book_code,
) {
  "$plain bible_folder";
  "$plain book_code";
  "One whole book as plain lines, each line a chapter code, a colon, a verse number and that verse's words.";
  "It is here because reading a book to GATHER it is a different reading from reading it to render it. Gathering wants every verse of the book at once and wants to know exactly where each one sits, and it wants no punctuation of its own between the reader and the words - a book handed back as nested objects spends most of its size on braces and quotes that say nothing about Scripture.";
  "The reference is the chapter's own code rather than a chapter number worked out from it, because that code is the very thing a gathered record points with. Deriving a number here would mean deriving the code back again at the other end, and a step that undoes itself is a step where the two ends can disagree.";
  "The chapters are sorted by their codes, which puts them in order because the codes are padded to a fixed width. Order matters here in a way it does not for a lookup: a book read out of order is not a book.";
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let sorted = list_sort_text(chapter_codes);
  async function map_chapter(chapter_code) {
    let chapter = await ebible_chapter_verse_texts(bible_folder, chapter_code);
    let verses = property_get(chapter, "verses");
    function map_verse(v) {
      let verse_number = property_get(v, "verse_number");
      let text = property_get(v, "text");
      let reference = list_join_colon([chapter_code, verse_number]);
      let line = list_join_space([reference, text]);
      return line;
    }
    let lines = list_map(verses, map_verse);
    let chapter_text = list_join_newline(lines);
    return chapter_text;
  }
  let chapters_texts = await list_map_async(sorted, map_chapter);
  let book_text = list_join_newline(chapters_texts);
  return book_text;
}
