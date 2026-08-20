import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { text_skip } from "./text_skip.mjs";
import { add } from "./add.mjs";
import { number_pad } from "./number_pad.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { subtract } from "./subtract.mjs";
export function ebible_chapter_code_neighbours(chapter_code) {
  "$plain chapter_code";
  "The chapter code either side of one, inside its own book.";
  "Named so that a bible can be asked whether a chapter of its is really the chapter next door wearing this number, which is what a renumbering looks like from outside: the Douay-Rheims Psalm ten holds exactly the verses the Psalm eleven a reader is shown holds.";
  "One of the two can name a chapter no book has - the code before the first, or the code after the last. Nothing is trimmed here, because whoever asks is looking a chapter up and an absent one simply answers with nothing.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let count = ebible_book_code_size();
  let digits = text_skip(chapter_code, count);
  let number = Number(digits);
  let number_before = subtract(number, 1);
  let number_after = add(number, 1);
  let digits_before = number_pad(number_before, count);
  let digits_after = number_pad(number_after, count);
  let before = list_join_empty([book_code, digits_before]);
  let after = list_join_empty([book_code, digits_after]);
  let neighbours = [before, after];
  return neighbours;
}
