import { property_path_equals_2 } from "./property_path_equals_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
export function js_ast_declarator_init_named(ast, name) {
  "What fills the line that binds a name, and nothing when no line anywhere in here binds it.";
  "A canonicalized file lifts almost every value onto a line of its own before it is used, so a question about a value is nearly always reached as a question about a name - and this is the step back from the name to the value, which is where the asking can go on.";
  "Nothing rather than a refusal when no line binds it, because the name may be a parameter or something the file imported, and neither of those is a mistake - they are simply values this file did not make, and a caller that cares can tell them apart by the name it already has in hand.";
  "The first line binding the name is the answer. A name bound twice in one function is a thing the shadowing gates already refuse, so there is no second one to choose between.";
  arguments_assert(arguments, 2);
  let declarators = js_list_type_nodes(ast, "VariableDeclarator");
  for (let declarator of declarators) {
    let same_is = property_path_equals_2(declarator, "id", "name", name);
    if (same_is) {
      let init = property_get(declarator, "init");
      return init;
    }
  }
  let missing = null;
  return missing;
}
