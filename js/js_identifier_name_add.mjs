import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export function js_identifier_name_add(node, names) {
  arguments_assert(arguments, 2);
  ("Put the word a piece of code stands under onto the list, when it is a plain word rather than something the language pulls apart.");
  ("The ending two readers of the same file had written out alike: ask whether this is a plain word, step away if it is not, and otherwise keep what it is called. A shared ending is a helper waiting to be written, and this one had already begun to drift - one of the two asked the question of a name given to a thing and the other of a name given to what a function is handed, which is the same question about two different pieces.");
  let held = js_identifier_name_try(node);
  if (null_is(held)) {
    return;
  }
  list_add(names, held);
}
