import { ebible_book_code_suggestions } from "./ebible_book_code_suggestions.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_map } from "./list_map.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export function ebible_chapter_code_suggestions(chapter_code) {
  "The real chapters closest to one a link named and the bible does not have - the nearest books, each carrying the chapter number the link already asked for.";
  "The number is kept and only the book is guessed at, because the number is the half a reader copied off something they were looking at and the three letters are the half nobody knows by heart. Somebody who followed a link to chapter four of a book spelled wrong still wants chapter four.";
  "The two halves are told apart by which characters they are made of rather than by where they sit, so JOHN4 splits as cleanly as JOH04 - and splitting it that way is what lets the letters JOHN find John, which taking the first three never could.";
  let word = text_letters_only(chapter_code);
  let digits = text_digits_only(chapter_code);
  let none = text_empty_is(digits);
  let chapter_name = none ? "1" : digits;
  let book_codes = ebible_book_code_suggestions(word);
  function to_chapter_code(book_code) {
    let suggested = ebible_chapter_code_pad(book_code, chapter_name);
    return suggested;
  }
  let suggestions = list_map(book_codes, to_chapter_code);
  return suggestions;
}
