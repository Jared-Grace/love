import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_single } from "./list_single.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
export function js_statement_value_written_is(statement) {
  "Whether this one line does nothing but put a name on a value written out where it stands - a number, a word, a yes or no, an empty list, an empty record.";
  "Nothing is computed and nothing is asked of anything else, so with the private names taken away the whole of what is left is the value itself. Two lines found alike here agree only that somebody wrote a zero, and a zero is not a helper.";
  "An empty list and an empty record count with the plain values even though the parser calls them something else. What makes a value written out where it stands is that the line does not ask, and neither of those asks; a list with things in it is left out because those things can themselves be work.";
  arguments_assert(arguments, 1);
  let declaration_is = js_node_type_is(statement, "VariableDeclaration");
  if (not(declaration_is)) {
    return false;
  }
  let declarators = js_declaration_declarators_get(statement);
  let several = list_multiple_is(declarators);
  if (several) {
    return false;
  }
  let declarator = list_single(declarators);
  let init = js_declare_init_get(declarator);
  let plain = js_literal_is(init);
  if (plain) {
    return true;
  }
  let list_node_is = js_node_type_is(init, "ArrayExpression");
  if (list_node_is) {
    let empty = property_list_empty_is(init, "elements");
    return empty;
  }
  let record_is = js_node_type_is(init, "ObjectExpression");
  if (record_is) {
    let empty2 = property_list_empty_is(init, "properties");
    return empty2;
  }
  return false;
}
