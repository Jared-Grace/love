import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { js_function_declaration_personal_names } from "./js_function_declaration_personal_names.mjs";
import { js_node_copy } from "./js_node_copy.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
export function js_function_declaration_working_shape(declaration) {
  "What one whole function does, with its own name and its private names taken away, so that the same work written in two places lands on the same text.";
  "The whole-function twin of the run reader beside it. That one is handed a slice of a body and has to be told which names are private, because a run of statements does not know what encloses it; a whole declaration does know, so nothing has to be told and the two questions a caller was asking together become one.";
  "The line counting the arguments is left out along with the prose, which is what lets a function the pass has been over be compared with a function written inside another one, where no such line is ever written. Without that they could never match, and a shared body found in fourteen places would have read as fourteen different bodies.";
  "It copies before it blanks. The blanking is done in place, so a declaration read here and read again anywhere else would otherwise hand back the first reading's blanks as if somebody had written them.";
  arguments_assert(arguments, 1);
  let working =
    js_function_declaration_statements_working_without_arguments_assert(
      declaration,
    );
  let personal = js_function_declaration_personal_names(declaration);
  let copied = js_node_copy(working);
  let shape = js_statements_shape(copied, personal);
  return shape;
}
