import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { ebible_book_division_uncategorized } from "./ebible_book_division_uncategorized.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { property_get } from "./property_get.mjs";
export function ebible_book_code_to_division_index(book_code) {
  "where a book's genre section sits in reading order, counting from the first section of the Old Testament, with the uncategorized section after every named one. sorting books by this before sorting them canonically is what keeps each section a single unbroken run, so a screen drawing a section card as it crosses into one never opens the same card twice";
  let divisions = ebible_book_divisions();
  let uncategorized = ebible_book_division_uncategorized();
  let ordered = list_concat(divisions, [uncategorized]);
  let division = ebible_book_code_to_division(book_code);
  let name = property_get(division, "name");
  let index = list_index_of_property(ordered, "name", name);
  return index;
}
