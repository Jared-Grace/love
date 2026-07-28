import { js_array_element_insert_beside } from "./js_array_element_insert_beside.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_string } from "./js_string.mjs";
export function js_array_text_insert_beside(elements, found, text, delta) {
  arguments_assert(arguments, 4);
  ("Puts a written word next to an entry already in the list, on whichever side");
  ("the step says. The two verbs above this one differ by that one number and by");
  ("nothing else, so they are one thing here and two names outside.");
  ("Both sides exist because a gap has two neighbours and only one of them may be");
  ("nameable: the first entry of a list has nothing above it to name.");
  ("Building the written word is all that is left here. Where it then goes is the");
  ("same question for a register of words and a register of names, so the placing");
  ("is one thing below and this is only the one half the two kinds disagree on.");
  let literal = js_string(text);
  js_array_element_insert_beside(elements, found, literal, delta);
}
