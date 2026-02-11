import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_declare_single(vd) {
  let b = js_node_type_is(vd, "VariableDeclaration");
  let declaration = null;
  if (not(b)) {
    return declaration;
  }
  let declarations = property_get(vd, "declarations");
  let s1 = list_size_1(declarations);
  if (not(s1)) {
    return declaration;
  }
  declaration = list_single(declarations);
  return declaration;
}
