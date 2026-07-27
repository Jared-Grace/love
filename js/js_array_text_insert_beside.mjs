import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add } from "./add.mjs";
import { js_string } from "./js_string.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_array_text_insert_beside(elements, found, text, delta) {
  arguments_assert(arguments, 4);
  ("Puts a written word next to an entry already in the list, on whichever side");
  ("the step says. The two verbs above this one differ by that one number and by");
  ("nothing else, so they are one thing here and two names outside.");
  ("Both sides exist because a gap has two neighbours and only one of them may be");
  ("nameable: the first entry of a list has nothing above it to name.");
  let index = list_index_of(elements, found);
  let index_at = add(index, delta);
  let literal = js_string(text);
  list_insert(elements, index_at, literal);
}
