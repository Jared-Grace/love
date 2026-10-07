import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function ebible_book_codes_old_testament() {
  "The books of the Old Testament, named by code, in the order a reader comes to them.";
  "Read off the genre sections rather than written out again here, so the canon's order stays kept in the one place that already keeps it. Each section carries the testament it belongs to and the sections are themselves in reading order, so the whole answer is a filter followed by a flatten.";
  "The twin counting from the other end was already here, and the list of all sixty six was too. What was missing was only this half, which is what anything asking whether a run of books stops short of the Old Testament's end has to compare against.";
  arguments_assert(arguments, 0);
  let divisions = ebible_book_divisions();
  let testament_name = ebible_testament_old_name();
  let members = list_filter_property(divisions, "testament", testament_name);
  let codes = [];
  for (let division of members) {
    let book_codes = property_get(division, "book_codes");
    list_add_multiple(codes, book_codes);
  }
  return codes;
}
