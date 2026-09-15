import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_words_measured_cases } from "./bible_verses_hyphen_words_measured_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verses_hyphen_words_measured } from "./bible_verses_hyphen_words_measured.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_verses_hyphen_words_measured_gate_run() {
  "Reads the hyphen question off four verses whose answer is known by hand, and fails the build if any part of the answer comes back changed.";
  "The answer is compared whole, summary and rows together, because every number in it is reachable by a different route and a gate that only checked the totals would pass a reading that had put the right count against the wrong word. Comparing whole also means a new field cannot be added to the answer without the corpus being told about it, which is the point: a field nobody has written an expectation for is a field nobody has checked.";
  "★ THE FOUR WORDS ARE FOUR DIFFERENT ANSWERS, AND THAT IS WHAT MAKES THIS ABLE TO DISAGREE. Panan-aw has no piece written on its own, jesu-cristo has one of two, diha-diha has both, and ika-tulo is the one also written joined up. A reading that always accused the hyphen would fail on diha-diha, and one that never accused it would fail on panan-aw, so neither of the two ways of being uniformly wrong survives this corpus.";
  arguments_assert(arguments, 0);
  let c = bible_verses_hyphen_words_measured_cases();
  let verses = property_get(c, "verses");
  let expected = property_get(c, "expected");
  let got = bible_verses_hyphen_words_measured(verses);
  let wrong = json_equal_not(got, expected);
  let defects = [];
  if (wrong) {
    list_add(defects, {
      got,
      expected,
    });
  }
  let f_name = fn_name("bible_verses_hyphen_words_measured");
  list_empty_is_assert_json(defects, {
    defects,
    hint: text_combine_multiple([
      "the hyphen reading answered differently than its corpus - read got beside expected, then mend ",
      f_name,
      " or the corpus, whichever is wrong",
    ]),
  });
  let answer = {
    verses: list_size(verses),
    defects: 0,
  };
  return answer;
}
