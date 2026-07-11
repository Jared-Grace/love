import { js_declaration_declarators_get } from "../../../love/public/src/js_declaration_declarators_get.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_declare_single(vd) {
  let b = js_node_type_is(vd, "VariableDeclaration");
  if (not(b)) {
    return null;
  }
  let declarations = js_declaration_declarators_get(vd);
  let s = list_size_1(declarations);
  if (not(s)) {
    return null;
  }
  let declaration = list_single(declarations);
  return declaration;
}
