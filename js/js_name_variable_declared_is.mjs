import { js_list_type } from "./js_list_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function js_name_variable_declared_is(ast, name) {
  "Whether this file gives this name to a variable anywhere in it.";
  "A name given to a variable holds nothing until the line that gives it has run, so a use written above that line reaches for something not there yet. A name that arrives another way - imported, declared as a function, handed in as a parameter - is ready before the first line of the body runs, and may be used anywhere.";
  "Whatever moves a use of a name to somewhere earlier asks this first, and leaves the code alone when the answer is yes.";
  let declarators = js_list_type(ast, "VariableDeclarator");
  for (let v of declarators) {
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    let id_is = js_node_type_is(id, "Identifier");
    if (id_is) {
      let declared = property_get(id, "name");
      if (equal(declared, name)) {
        return true;
      }
    }
  }
  return false;
}
