import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_index_flat_chapter_codes } from "./ebible_index_flat_chapter_codes.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
export function ebible_index_flat_book_codes(list) {
  "The books a flat index holds, in the order the index holds them.";
  "A chapter code carries its book at the front, so the books are what the chapter codes say when only that front is read, each one counted once.";
  "The order is the index's own and is kept, because it is the bible's order rather than the alphabet's, and a reader going on from the end of one book expects the next one along.";
  "This is what lets a page offer a partial bible honestly. A bible that publishes Mark alone names one book here, so the reader is offered that one rather than sixty-six, sixty-five of which open on nothing.";
  let chapter_codes = ebible_index_flat_chapter_codes(list);
  let book_codes = list_map_unique(chapter_codes, ebible_chapter_code_to_book);
  return book_codes;
}
