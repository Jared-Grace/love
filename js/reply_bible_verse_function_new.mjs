import { reply_bible_verse_wordings } from "./reply_bible_verse_wordings.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { function_new_code } from "./function_new_code.mjs";
import { list_size } from "./list_size.mjs";
export async function reply_bible_verse_function_new(
  chapter_code,
  verse_number,
  wording_heard,
) {
  "$plain chapter_code";
  "$plain verse_number";
  "$plain wording_heard";
  "Writes the rule for one verse from its reference: reply_bible_1jn_4_7 from 1JN04 and 7, reading every wording of that verse in the English Bibles nobody owns.";
  "wording_heard is a wording a real message used that none of those Bibles has, in plain lower-case words, or empty when there is none. It is the only part a reference cannot supply.";
  let found = await reply_bible_verse_wordings(chapter_code, verse_number);
  list_empty_not_is_assert(found);
  if (text_empty_not_is(wording_heard)) {
    list_add(found, wording_heard);
  }
  let wordings = list_unique(found);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let f_name = `reply_bible_${text_lower_to(book_code)}_${chapter_name}_${verse_number}`;
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  let says = `${book_name} ${chapter_name}:${verse_number} said whole, in the wordings written here. Made by reply_bible_verse_function_new.`;
  let lines = [
    `(${JSON.stringify(says)});`,
    `let r = reply_bible_verse_read(${JSON.stringify(chapter_code)}, ${JSON.stringify(verse_number)}, ${JSON.stringify(wordings)});`,
    "return r;",
  ];
  await function_new_code(f_name, [], false, lines);
  let made = {
    f_name,
    wordings: list_size(wordings),
  };
  return made;
}
