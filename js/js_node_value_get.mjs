import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_single } from "./list_single.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
export function js_node_value_get(node) {
  ("The value a selection holds, whether the selection stopped at the value or at");
  ("the line that binds it. The sister of the one that does this for calls, and");
  ("for the same reason: a verb that reads a node at one depth pairs with only");
  ("half the addresses.");
  ("It matters most for the things worth naming — a list or a set of settings is");
  ("reached as the line that binds it, since that line is what carries the name.");
  let declaration_is = js_node_type_is(node, "VariableDeclaration");
  if (declaration_is) {
    let declarators = js_declaration_declarators_get(node);
    let declarator = list_single(declarators);
    let init = js_declare_init_get(declarator);
    return init;
  }
  return node;
}
