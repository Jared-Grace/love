import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_book_speaker_defaults } from "./bible_book_speaker_defaults.mjs";
export function bible_book_speaker_default(book_code) {
  "The one book's fallback speaker, or null where the code names no book this repo carries.";
  "Null rather than a guess, because a reading that cannot say who is speaking should stop and be told so. A silent fallback to a narrator would put the wrong voice on a whole book and would never report it.";
  arguments_assert(arguments, 1);
  let books = bible_book_speaker_defaults();
  let found = list_find_property_or_null(books, "code", book_code);
  return found;
}
