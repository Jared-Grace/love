import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_string_is } from "./js_statement_string_is.mjs";
export function js_prose_statement_nodes(ast) {
  "Every line of explanation in this code, as the whole statement rather than the string inside it, in the order they are written.";
  "The neighbour that hands back the strings is what a reader wants; this is what a writer wants. Changing what a line says means putting a new statement where the old one stood, and a string handed over on its own has lost the place it stood in.";
  arguments_assert(arguments, 1);
  let statements = js_list_type_nodes(ast, "ExpressionStatement");
  let prose = list_filter(statements, js_statement_string_is);
  return prose;
}
