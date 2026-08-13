import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { property_get } from "./property_get.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { assert_json } from "./assert_json.mjs";
export function ebible_book_divisions_canon_assert() {
  "QA gate: prove the testament-to-section-to-book tree covers the whole 66-book canon exactly, in canonical order, once each, so an edit that drops, duplicates, misspells, reorders, or mistags a book (or leaves a section out of a testament) fails the gate instead of silently hiding a book from the picker";
  let canon = ebible_book_codes();
  let testaments = ebible_book_testaments();
  function testament_codes(testament) {
    let divisions = property_get(testament, "divisions");
    function division_codes(division) {
      let codes = property_get(division, "book_codes");
      return codes;
    }
    let flat = list_map_concat_multiple(divisions, division_codes);
    return flat;
  }
  let grouped = list_map_concat_multiple(testaments, testament_codes);
  let same = lists_equal_pair(grouped, canon);
  assert_json(same, {
    grouped,
    canon,
    hint: "the book sections must cover the whole canon exactly and in order; a mismatch means a book was dropped, duplicated, misspelled, reordered, or placed under the wrong testament",
  });
}
