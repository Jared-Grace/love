import { integer_to_try } from "./integer_to_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_to } from "./text_to.mjs";
import { less_than } from "./less_than.mjs";
import { ebible_book_code_suggestions } from "./ebible_book_code_suggestions.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_map } from "./list_map.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
export function ebible_chapter_code_suggestions(chapter_code) {
  "The real chapters closest to one a link named and the bible does not have - the nearest books, each carrying the chapter number the link already asked for.";
  "The number is kept and only the book is guessed at, because the number is the half a reader copied off something they were looking at and the three letters are the half nobody knows by heart. Somebody who followed a link to chapter four of a book spelled wrong still wants chapter four.";
  "The two halves are told apart by which characters they are made of rather than by where they sit, so JOHN4 splits as cleanly as JOH04 - and splitting it that way is what lets the letters JOHN find John, which taking the first three never could.";
  "What is offered has to be a code this bible would answer to, so the number is read as a number and spelled again rather than carried across as the characters it arrived as. A link written JHN004 otherwise came back suggesting JHN004, and a link with no real number in it at all came back offering a nought'th chapter - both of them a screen handing the reader a second link to the same place they just came from.";
  let word = text_letters_only(chapter_code);
  let digit_text = text_digits_only(chapter_code);
  let number = integer_to_try(digit_text);
  let none = null_is(number) || less_than(number, 1);
  let chapter_name = none ? "1" : text_to(number);
  let book_codes = ebible_book_code_suggestions(word);
  function to_chapter_code(book_code) {
    let suggested = ebible_chapter_code_pad(book_code, chapter_name);
    return suggested;
  }
  let suggestions = list_map(book_codes, to_chapter_code);
  return suggestions;
}
