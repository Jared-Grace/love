import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { list_any_starts_with } from "./list_any_starts_with.mjs";
export function js_call_name_text_cut_is(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("Whether a call written by this name is one that cuts a piece of text out of a bigger piece of text, so that whatever it is given, what comes back is writing.");
  ("IT IS A LIST OF FAMILIES AND NOT A LIST OF FUNCTIONS, because the families are stable and their members are not. There are dozens of ways to split a piece of text here and more arrive every month, so naming each one would be a list that is wrong a week after it is written, while the stem it begins with has not moved in the life of the repo.");
  ("Each stem is held as fixed text for that same reason. Several of them happen to spell a real function as well as a family, and left loose the pass that canonicalizes this file would write them as references to those single functions - which would say the list is nine functions when it is nine families, and would let a rename of one of them quietly change what the other forty match.");
  ("The prefix text on its own is deliberately not a family. Two of the most used names beginning with it hand back a number rather than writing - one measures a piece of text and one writes a number out - so the whole prefix would say the opposite of what it means for exactly the names most likely to be compared against a number.");
  ("A family missing from here costs a reading above this the chance to notice something, and never makes it say something wrong. That is the direction this must fail in, because the one thing built on it refuses to let the repo change, and a refusal made on a guess would be a wrong answer nobody could argue with.");
  let t = text_frozen("text_split");
  let t2 = text_frozen("text_after");
  let t3 = text_frozen("text_before");
  let t4 = text_frozen("text_between");
  let t5 = text_frozen("text_slice");
  let t6 = text_frozen("text_trim");
  let t7 = text_frozen("text_first");
  let t8 = text_frozen("text_last");
  let t9 = text_frozen("text_replace");
  let stems = [t, t2, t3, t4, t5, t6, t7, t8, t9];
  let cut = list_any_starts_with(name, stems);
  return cut;
}
