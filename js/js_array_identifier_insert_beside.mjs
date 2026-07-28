import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add } from "./add.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_array_identifier_insert_beside(
  elements,
  found,
  identifier_name,
  delta,
) {
  arguments_assert(arguments, 4);
  ("Puts a name next to an entry already in the list, on whichever side the step");
  ("says. The two verbs above this one differ by that one number and by nothing");
  ("else, so they are one thing here and two names outside.");
  ("Both sides exist because a gap has two neighbours and only one of them may be");
  ("nameable: the first entry of a list has nothing above it to name.");
  ("Building the name is all that is left here. Where it then goes is the same");
  ("question for a register of names and a register of written words, so the");
  ("placing is one thing below and this is only the one half the two kinds");
  ("disagree on.");
  let identifier = js_identifier_expression(identifier_name);
  js_array_element_insert_beside(elements, found, identifier, delta);
}
