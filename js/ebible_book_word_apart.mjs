import { list_min } from "./list_min.mjs";
import { property_get } from "./property_get.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
export function ebible_book_word_apart(book, word) {
  "How far a written word is from one book of the bible, counted as the nearer of two comparisons: against the book's code, and against the book's name.";
  "A link carries codes, but nobody thinks in them - somebody typing a book by hand is remembering the name and shortening it. So JOH is two edits from JHN and one from JOHN, and asking only the code would rank Joshua and Job above the book they meant. Asking both and keeping the nearer answer lets a reader be found by whichever of the two they were aiming at.";
  let book_code = property_get(book, "book_code");
  let name = property_get(book, "text");
  let name_upper = text_upper_to(name);
  let apart_code = text_edit_distance(book_code, word);
  let apart_name = text_edit_distance(name_upper, word);
  let apart = list_min([apart_code, apart_name]);
  return apart;
}
