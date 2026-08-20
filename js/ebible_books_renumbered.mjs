import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_neighbours } from "./ebible_chapter_code_neighbours.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal_by_json_lambda } from "./equal_by_json_lambda.mjs";
import { list_any } from "./list_any.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_unique } from "./list_unique.mjs";
export function ebible_books_renumbered(
  numbers,
  numbers_reference,
  chapter_codes,
) {
  "Which books one bible has moved along, told apart from the books it merely divides into verses differently.";
  "The two look alike chapter by chapter - both come out as numbers that do not match - and they are opposite in what they cost a reader. A book divided differently gives an address that finds nothing, which is a result quietly missing. A book moved along gives an address that finds the wrong verse and shows it as an answer, and it does that for every word of every chapter in the book.";
  "A chapter is taken as moved when its verse numbers are exactly what the reference carries one chapter either side. That is what a shift is, and it is why the seven Douay-Rheims psalms that happen to carry the same numbers as the psalm they were compared against cannot hide: the hundred and thirty-two beside them each land on their neighbour, and the whole book goes out together.";
  "Only chapters already known not to match are asked, so a book whose chapters all agree can never be called moved by an accident of arithmetic.";
  function chapter_moved_is(chapter_code) {
    let ours = property_get(numbers, chapter_code);
    let neighbours = ebible_chapter_code_neighbours(chapter_code);
    function neighbour_same_is(neighbour) {
      let theirs = property_get_or_null(numbers_reference, neighbour);
      let absent = null_is(theirs);
      if (absent) {
        return false;
      }
      let same_is = equal_by_json_lambda(theirs);
      let same = same_is(ours);
      return same;
    }
    let moved = list_any(neighbours, neighbour_same_is);
    return moved;
  }
  let moved = list_filter(chapter_codes, chapter_moved_is);
  let books = list_map(moved, ebible_chapter_code_to_book);
  let renumbered = list_unique(books);
  return renumbered;
}
