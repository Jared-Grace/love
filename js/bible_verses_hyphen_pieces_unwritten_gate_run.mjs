import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_pieces_unwritten_cases } from "./bible_verses_hyphen_pieces_unwritten_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verses_hyphen_pieces_unwritten } from "./bible_verses_hyphen_pieces_unwritten.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_verses_hyphen_pieces_unwritten_gate_run() {
  "Names the words a search of six known verses would wrongly affirm, and fails the build if the list changes.";
  "Both the words and where each was cut from are compared, because the list on its own says a search will be wrong and the second half says which word it will be wrong about. A reader handed a yes has to reach that second half to see why the yes is worthless, so it is checked as closely as the first.";
  "★ THIS GATE CAN GO RED WITHOUT ANYTHING HERE CHANGING, AND THAT IS THE POINT. It is built on the hyphen reading, so a change to how words are cut apart moves this answer as well - which is what makes it a check on the shared pattern and not only on the code beneath it.";
  arguments_assert(arguments, 0);
  let c = bible_verses_hyphen_pieces_unwritten_cases();
  let verses = property_get(c, "verses");
  let expected = property_get(c, "expected");
  let got = bible_verses_hyphen_pieces_unwritten(verses);
  let wrong = json_equal_not(got, expected);
  let defects = [];
  if (wrong) {
    list_add(defects, {
      got,
      expected,
    });
  }
  let f_name = fn_name("bible_verses_hyphen_pieces_unwritten");
  list_empty_is_assert_json(defects, {
    defects,
    hint: text_combine_multiple([
      "the words a search would wrongly affirm have changed - read got beside expected, then mend ",
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
