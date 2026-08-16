import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_get } from "./list_get.mjs";
export function js_statement_call_held(statement) {
  "The name this statement gives a call, together with the call, or nothing when it does not give a call a name.";
  let declaration_is = js_node_type_is(statement, "VariableDeclaration");
  if (not(declaration_is)) {
    return null;
  }
  let declarations = property_get(statement, "declarations");
  let size = list_size(declarations);
  if (equal_not(size, 1)) {
    return null;
  }
  let declared = list_get(declarations, 0);
  let id = property_get(declared, "id");
  let id_is = js_node_type_is(id, "Identifier");
  if (not(id_is)) {
    return null;
  }
  let init = property_get(declared, "init");
  let call_is = js_node_type_is(init, "CallExpression");
  if (not(call_is)) {
    return null;
  }
  let name = property_get(id, "name");
  let held = {
    name,
    call: init,
  };
  return held;
}
