import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { urdu_bible_book_codes } from "./urdu_bible_book_codes.mjs";
import { text_urdu_quote_bare } from "./text_urdu_quote_bare.mjs";
export function urdu_bible_book_code_or_null(book_said) {
  "The code of the book an Urdu sentence named, or null when the words before the chapter number name no book.";
  "The words handed in are the one or two that stood before the number. Two are tried whole first, because a numbered book is written as a digit and a name with a space between, and then the last word alone, because the word before a one-word book is usually just the sentence running into it.";
  arguments_assert(arguments, 1);
  let codes = urdu_bible_book_codes();
  function key(t) {
    let k = text_urdu_quote_bare(t).replace(/[\s-]/g, "");
    return k;
  }
  let whole = codes[key(book_said)];
  if (not_equal(whole, undefined)) {
    return whole;
  }
  let last = book_said.split(" ").pop();
  let alone = codes[key(last)];
  if (not_equal(alone, undefined)) {
    return alone;
  }
  return null;
}
