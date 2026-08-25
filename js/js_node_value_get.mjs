import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_single } from "./list_single.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
export function js_node_value_get(node) {
  "The value a selection holds, whether the selection stopped at the value or at";
  "the line that binds it. The sister of the one that does this for calls, and";
  "for the same reason: a verb that reads a node at one depth pairs with only";
  "half the addresses.";
  "It matters most for the things worth naming — a list or a set of settings is";
  "reached as the line that binds it, since that line is what carries the name.";
  "A NAMED PART OF A RECORD IS THE THIRD WAY IN, and it was the one missing. A list bound to a name is reached through the line that binds it; a list sitting under a name inside a record has no such line, so every verb that writes into a list stopped at the edge of one. Opening the part to its value here is what lets the address for it pair with all of them at once, rather than each verb learning the shape.";
  let declaration_is = js_node_type_is(node, "VariableDeclaration");
  if (declaration_is) {
    let declarators = js_declaration_declarators_get(node);
    let declarator = list_single(declarators);
    let init = js_declare_init_get(declarator);
    return init;
  }
  let property_is = js_node_type_is(node, "Property");
  if (property_is) {
    let held = property_get(node, "value");
    return held;
  }
  return node;
}
