import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export function ebible_book_codes_new_testament_first() {
  "Every book of the bible in the canonical order, except that the New Testament is moved in front of the Old.";
  "This is the order for a job over the whole bible that may not get to the end of it - recording a voice, or anything else measured in days rather than minutes. Stopped anywhere, what it has finished is the part people are reading, because the two apps this repo builds on the bible both start in the gospels.";
  "It is not a second copy of the canon. The order and the testament each book belongs to are both read off the divisions list, so a book added or a section renamed there is followed here and cannot be forgotten.";
  let divisions = ebible_book_divisions();
  let name_new = ebible_testament_new_name();
  function division_new_is(division) {
    let testament = property_get(division, "testament");
    let is = equal(testament, name_new);
    return is;
  }
  let divisions_new = list_filter(divisions, division_new_is);
  let divisions_old = list_filter_not(divisions, division_new_is);
  let ordered = list_concat(divisions_new, divisions_old);
  let book_codes = [];
  function division_each(division) {
    let codes = property_get(division, "book_codes");
    list_add_multiple(book_codes, codes);
  }
  each(ordered, division_each);
  return book_codes;
}
