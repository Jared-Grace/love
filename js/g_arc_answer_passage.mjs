import { fn_name } from "./fn_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { g_passage_reference } from "./g_passage_reference.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_arc_answer_passage(passages, reference_written) {
  ("The passage a written answer meant, found by the citation it copied back. What comes back is one line of the prompt's own text, and this is the step that turns it into the passage itself - carrying the chapter code the game stores and the verse numbers it was written against.");
  ("NOTHING IS PARSED. The citation is rebuilt from each passage that was offered by ",
    fn_name("g_passage_reference"),
    " - the same spelling the prompt showed - and the two are compared. A parser would take the answer apart into a book, a chapter and a list of verses, and every one of those steps can succeed on its own and still land on a passage nobody offered: verse 5 where the passage was 5 and 6 together. Compared whole, an answer either names a passage that was handed over or names none.");
  ("MATCHED ONLY AGAINST WHAT WAS OFFERED, never resolved on its own. A general reader of references would resolve Scripture this arc was not allowed to answer from, and hand it back as though it had been offered. Read against the passages themselves, an invented reference has nowhere to land and says so instead.");
  ("The code spelling is accepted as well as the name - 1JN02:5,6 for 1 John 2:5,6 - because being shown one spelling does not stop a writer reaching for the other, and a turn is too expensive to throw away over which of two right answers came back. That form is built here rather than by ",
    fn_name("g_passage_reference"),
    ", because it is a tolerance on the way in and never a thing this repo writes out.");
  ("Case, spaces and brackets are let go of on both sides. None of them carries anything here: a lost capital is not a different passage, and the brackets are the boundary the citation was copied out from, so a writer taking them along has still copied the right thing.");
  function loosened(text) {
    let lowered = text_lower_to(text);
    let squeezed = text_replace_space_to(lowered, "");
    let opened = text_replace(squeezed, "[", "");
    let closed = text_replace(opened, "]", "");
    return closed;
  }
  let written = loosened(reference_written);
  let offered = [];
  for (let passage of passages) {
    let reference = g_passage_reference(passage);
    list_add(offered, reference);
    let left = loosened(reference);
    let by_name = equal(left, written);
    if (by_name) {
      return passage;
    }
    let chapter = property_get(passage, "chapter");
    let joined = property_list_join_comma(passage, "verse_numbers");
    let coded = list_join_colon([chapter, joined]);
    let left2 = loosened(coded);
    let by_code = equal(left2, written);
    if (by_code) {
      return passage;
    }
  }
  assert_json(false, {
    reference_written,
    offered,
    hint: "an answer may only name a passage its own prompt handed it, so this is either a passage that was never offered, verses regrouped into a passage nobody wrote, or the right one spelled a third way",
  });
}
