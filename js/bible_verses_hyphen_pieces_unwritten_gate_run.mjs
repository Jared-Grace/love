import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_pieces_unwritten_cases } from "./bible_verses_hyphen_pieces_unwritten_cases.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verses_hyphen_pieces_unwritten } from "./bible_verses_hyphen_pieces_unwritten.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_to } from "./json_to.mjs";
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
  if (wrong) {
    let f_name = fn_name("bible_verses_hyphen_pieces_unwritten");
    let defect =
      text_combine_multiple([f_name, " answered "]) +
      json_to(got) +
      " and was expected to answer " +
      json_to(expected);
    console.log(defect);
    let f_name2 = fn_name("bible_verses_hyphen_pieces_unwritten_gate_run");
    let combined = text_combine_multiple([
      f_name2,
      ": the words a search would wrongly affirm have changed",
    ]);
    throw new Error(combined);
  }
  let answer = {
    checked: 1,
    defects: 0,
  };
  return answer;
}
