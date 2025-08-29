import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_declare_single(vd) {
  let b = js_node_type_is(vd, "VariableDeclaration");
  let declaration = null;
  if (not(b)) {
    return declaration;
  }
  let { declarations } = vd;
  let s1 = list_size_1(declarations);
  if (not(s1)) {
    return declaration;
  }
  declaration = list_single(declarations);
  return declaration;
}
