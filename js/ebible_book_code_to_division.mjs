import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { ebible_book_division_uncategorized } from "./ebible_book_division_uncategorized.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export function ebible_book_code_to_division(book_code) {
  "which genre section a book belongs to, tagged with its testament - so a screen showing books in canonical order can tell when it has crossed into a new section or a new testament without building the whole tree first. a book no section claims comes back as the uncategorized one rather than as nothing, so every caller has a group to put it in";
  let divisions = ebible_book_divisions();
  function claims(division) {
    let book_codes = property_get(division, "book_codes");
    let includes = list_includes(book_codes, book_code);
    return includes;
  }
  let found = list_find_or_null(divisions, claims);
  let missing = null_is(found);
  if (missing) {
    let uncategorized = ebible_book_division_uncategorized();
    return uncategorized;
  }
  return found;
}
