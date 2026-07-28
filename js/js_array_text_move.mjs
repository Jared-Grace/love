import { js_array_element_move_beside } from "./js_array_element_move_beside.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
export function js_array_text_move(ast, selects, text, after_text) {
  arguments_assert(arguments, 4);
  ("Moves a word already in an ordered register to sit directly after another word");
  ("already there. The hole the register family was left with: taking an entry out");
  ("and putting it back at a place was two commands, so the log read as two");
  ("changes and a reader had to hold both to see the one thing that happened.");
  ("The place is named by its neighbour rather than counted, for the same reason");
  ("the add-beside verbs name one: a count is wrong the moment anybody inserts");
  ("above it and nothing says so, while a neighbour is either still there or the");
  ("command refuses.");
  ("Both words are looked up BEFORE anything is taken out, so a wrong neighbour");
  ("refuses against the list the caller meant rather than against a list already");
  ("half-changed.");
  let elements = js_selects_array_elements(ast, selects);
  let moving = js_array_element_text_find(elements, text);
  let neighbour = js_array_element_text_find(elements, after_text);
  ("Nothing is rebuilt: the entry that leaves is the entry that arrives, so the");
  ("moving itself knows nothing about words and is shared with the twin that moves");
  ("a name. What is left here is only the finding, which is the one half the two");
  ("registers genuinely disagree about.");
  let delta = 1;
  js_array_element_move_beside(elements, moving, neighbour, delta);
}
