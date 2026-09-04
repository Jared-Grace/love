import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
import { not_equal } from "./not_equal.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_call_argument_at_try } from "./js_call_argument_at_try.mjs";
export function js_node_word_frozen_try(node) {
  "The written word standing at a node, seen through the one marker that says a word can never be renamed, and nothing at all anywhere else. Read-only, pure.";
  "A word that has already left this repo - a key on somebody's device, a word inside an address already handed out - is written inside that marker so that nothing here ever promotes it into a reference. The marker hands its own first word straight back, so the word really is there, one call further in, and a reading that asked only for a plainly written word saw the most carefully published words in the repo as no word at all.";
  ("★ IT LOOKS AT THE NAME BEING CALLED, WHICH IS THE WHOLE DIFFERENCE FROM THE READER BESIDE IT. That one sees through ANY single wrapping call, which is right where the question is 'is there a word behind this' and wrong where the question is 'is a word being stored here': a name handed over as a reference to a function is spelled as a call too, and unwrapping it turns a function's name into a stored word. Measured 2026-09-04: reading storage words through the broad one collected ",
    fn_name("app_a_paste"),
    ", ",
    fn_name("app_a_file_system_initialize"),
    " and an empty word, none of which any browser has ever held.");
  arguments_assert(arguments, 1);
  let plain = js_literal_value_try(node);
  let written = not_equal(plain, null);
  if (written) {
    return plain;
  }
  let called = js_call_callee_name_try(node);
  let marker = equal(called, fn_name("text_frozen"));
  if (not(marker)) {
    return null;
  }
  let inside = js_call_argument_at_try(node, "1");
  let word = js_literal_value_try(inside);
  return word;
}
