import { text_upper_to } from "./text_upper_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_book_hash_key } from "./app_shared_bible_book_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_book_hash_get(hash) {
  arguments_assert(arguments, 1);
  ("The book a link asks for on its own, or nothing at all when the link names no book by itself.");
  ("A link spells the book on its own only while the chapter is still unchosen. Once a chapter is picked the chapter says which book it belongs to, and the book is dropped from the link rather than written twice - so a link almost never carries both, and reading this one and finding nothing usually means the chapter is there instead.");
  ("THE WORD IS PUT INTO CAPITALS AS IT COMES OUT OF THE LINK, BECAUSE A LINK IS THE ONE PLACE A PERSON SPELLS A BOOK BY HAND. The sixty-six codes are all capitals, so a link saying psa rather than PSA is read as a book that is not one of the sixty-six at all, and the page then offers the reader spellings near to what they wrote instead of the psalm they asked for - a wrong answer that looks like a considered one. Doing it here rather than at each page is what stops one page being lenient about capitals while its neighbour is not.");
  let property_name = app_shared_bible_book_hash_key();
  let book_code = property_get_or(hash, property_name, "");
  let book_code_upper = text_upper_to(book_code);
  return book_code_upper;
}
