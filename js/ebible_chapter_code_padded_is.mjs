import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_to } from "./text_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { equal } from "./equal.mjs";
export function ebible_chapter_code_padded_is(chapter_code) {
  "Whether a chapter code carries its number the way this bible spells one - JHN04 does, JHN4 does not.";
  "It is asked by spelling the code again from its own two halves and seeing whether the same thing comes back, rather than by counting the digits here. The one that does the spelling already knows the widths and already knows Psalms is the book that needs three, and a second place holding the same knowledge is a second place for it to go out of step.";
  "This is a question about the shape of a code, not about whether the chapter exists. How many chapters a book has cannot be known before the bible is fetched, so a link naming a hundredth chapter of John still passes here - but a link that simply wrote the number without its nought is caught before anything is fetched, which is the whole class of mistake a person makes by hand.";
  arguments_assert(arguments, 1);
  ("A code whose tail is not a number at all is answered before anything is spelled, because there would be nothing to spell it from. This has to be settled here rather than left to throw: the whole point of the question is to be asked about a code somebody typed wrong, so a way of typing it that made the asking itself fail would put the reader back in front of the very error page this exists to keep them out of.");
  let name_code = ebible_chapter_code_to_name_code(chapter_code);
  let number = integer_to_try(name_code);
  let missing = null_is(number);
  if (missing) {
    let no = false;
    return no;
  }
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_name = text_to(number);
  let spelled = ebible_chapter_code_pad(book_code, chapter_name);
  let same = equal(spelled, chapter_code);
  return same;
}
