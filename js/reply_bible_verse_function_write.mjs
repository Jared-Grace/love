import { json_to } from "./json_to.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function reply_bible_verse_function_write(reference, codes) {
  "Writes the rule of one verse from the written code of its parts, replacing the rule it had.";
  let chapter_code = reference.chapter_code;
  let verse_number = reference.verse_number;
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let lower = book_code.toLowerCase();
  let f_name = `reply_bible_${lower}_${chapter_name}_${verse_number}`;
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  let says = `${book_name} ${chapter_name}:${verse_number} said whole, in the words of the English Bibles nobody owns, lined up. Made by reply_bible_verse_function_new.`;
  await function_delete_if_exists(f_name);
  let json = json_to(says);
  let v = codes.join(", ");
  let json2 = json_to(chapter_code);
  let json3 = json_to(verse_number);
  let lines = [
    `(${json});`,
    `let read = reply_sequence([${v}]);`,
    `let r = reply_bible_verse_whole(${json2}, ${json3}, read);`,
    "return r;",
  ];
  await function_new_code(f_name, [], false, lines);
  return f_name;
}
