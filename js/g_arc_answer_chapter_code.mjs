import { fn_name } from "./fn_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_arc_answer_chapter_code(passages, book_chapter_written) {
  ("The chapter code a written answer meant, read back out of the chapter it wrote. The prompt shows a chapter the way everyone spells one, 1 John 1, and this is the step that turns what came back into the ",
    fn_name("ebible_chapter_code_label"),
    " code the game stores.");
  ("SPELLED OUT in the prompt because a reference is one of the most practised shapes there is, and 1JN01 is not that shape. Writing the familiar one costs a translation on the way back and buys the writer a name it already knows everything about - which is worth more here than saving this function, since the passage it names is the whole of what the turn is answering with.");
  ("MATCHED ONLY AGAINST THE CHAPTERS OFFERED, never parsed on its own. A general reader of references would resolve a book that was never handed over, and quietly hand back a real code for Scripture this arc was not allowed to answer from. Reading it against the passages themselves means an invented chapter has nowhere to land and says so instead.");
  ("The code is accepted as well as the name, because being shown one spelling does not stop a writer reaching for the other, and a turn is too expensive to throw away over which of two right answers came back.");
  ("Case and spaces are let go of on both sides. They carry nothing here, and a lost capital is not a different chapter.");
  function loosened(text) {
    let lowered = text_lower_to(text);
    let squeezed = text_replace_space_to(lowered, "");
    return squeezed;
  }
  let written = loosened(book_chapter_written);
  let codes = list_map_property_unique(passages, "chapter");
  let offered = [];
  for (let code of codes) {
    let label = ebible_chapter_code_label(code);
    list_add(offered, label);
    let left = loosened(label);
    let by_label = equal(left, written);
    let left2 = loosened(code);
    let by_code = equal(left2, written);
    if (by_label) {
      return code;
    }
    if (by_code) {
      return code;
    }
  }
  assert_json(false, {
    book_chapter_written,
    offered,
    hint: "an answer may only name a chapter its own prompt handed it, so this is either a chapter that was never offered or the right one spelled a third way",
  });
}
