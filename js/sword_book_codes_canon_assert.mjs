import { sword_book_codes } from "./sword_book_codes.mjs";
import { object_values } from "./object_values.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function sword_book_codes_canon_assert() {
  "QA gate: prove the Sword book-name pairing names the whole 66-book canon exactly, in canonical order, once each, so an edit that drops, duplicates, misspells or reorders a book fails here rather than filing a book's verses under its neighbour's name";
  "Only the repo's half of each pair can be checked here, and that is on purpose. A module's own spelling can only be judged against a module, and a module is a downloaded file rather than repo content, so a gate that wanted one would have nothing to read in the frozen copy it runs in. The half that is checkable is the half an edit is likely to get wrong.";
  "HOW MANY PAIRS WERE READ TRAVELS OUT WITH THE VERDICT. Passing here means the two lists were said to be the same, and two empty lists are the same as each other - so a pairing that had been emptied, or a reading of it that had stopped returning anything, would pass in exactly the words a whole canon passes in. The count is the only part of the answer that falls on the day that happens.";
  let codes = sword_book_codes();
  let paired = object_values(codes);
  let canon = ebible_book_codes();
  let same = lists_equal_pair(paired, canon);
  assert_json(same, {
    paired,
    canon,
    hint: "each Sword book name must be said against one of the repo's sixty-six book codes, all of them, in canonical order; a mismatch means a pair was dropped, duplicated, misspelled or moved",
  });
  let walked = list_size(paired);
  let r = {
    walked,
  };
  return r;
}
