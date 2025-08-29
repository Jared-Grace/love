import { not } from "./not.mjs";
import { list_single } from "./list_single.mjs";
import { assert } from "./assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_declare_single(vd) {
  let b = js_node_type_is(vd, "VariableDeclaration");
  if (not(b)) {
  }
  assert(b);
  let { declarations } = vd;
  let declarator = list_single(declarations);
  return declarator;
}
