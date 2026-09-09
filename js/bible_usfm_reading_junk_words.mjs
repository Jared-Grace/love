import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_books } from "./bible_usfm_version_books.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_version_book_chapter_codes } from "./bible_usfm_version_book_chapter_codes.mjs";
import { add } from "./add.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { bible_usfm_version_chapter_text } from "./bible_usfm_version_chapter_text.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_word_junk_why_or_null } from "./text_word_junk_why_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_usfm_reading_junk_words(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Every word in the whole of one usfm bible, read exactly the way this repo hands a chapter to whoever copies one, that cannot be a word of English at all - each with the chapter it stands in and the reason it cannot be one, and beside them how many chapters were actually read.");
  ("★ IT HAS NO SECOND SOURCE, AND THAT IS WHY IT WAS BUILT. The sweep beside this one sets the shelf against the interlinear tables, which is the only way to see a line the reader wrongly keeps or wrongly drops - but two publications made from one publisher's material carry that publisher's faults alike, and a fault they share reads as agreement. Three stray letters sat in Genesis 35 and Acts 4 with both sides agreeing word for word about them. This reads one side and asks the language, so nothing it finds can hide in a control.");
  ("IT READS THROUGH THE READER AND NEVER OFF THE SHELF. A grep of the marked-up files answers about the files; what matters is what a person is actually handed, which is the file after the marks are taken off, the notes dropped and the lines joined - and that is where two words weld together, because the weld is often a note closed hard against the next word and there is no note left to see afterwards.");
  ("HOW MANY CHAPTERS WERE READ COMES BACK BESIDE THE FINDINGS, because a shelf that moved leaves this answering an empty list, and an empty list is exactly what a clean bible looks like.");
  let books = await bible_usfm_version_books(version);
  let rows = [];
  let read = 0;
  for (let book of books) {
    let book_code = property_get(book, "book_code");
    let chapter_codes = await bible_usfm_version_book_chapter_codes(
      version,
      book_code,
    );
    for (let chapter_code of chapter_codes) {
      read = add(read, 1);
      let chapter_number = ebible_chapter_code_to_number(chapter_code);
      let reading = await bible_usfm_version_chapter_text(
        version,
        book_code,
        chapter_number,
      );
      let evened = whitespace_normalize(reading);
      let words = text_split_space(evened);
      for (let word of words) {
        let why = text_word_junk_why_or_null(word);
        let junk = null_not_is(why);
        if (junk) {
          let row = {
            chapter_code,
            word,
            why,
          };
          list_add(rows, row);
        }
      }
    }
  }
  let r = {
    read,
    rows,
  };
  return r;
}
