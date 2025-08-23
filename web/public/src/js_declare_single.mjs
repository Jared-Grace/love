import {list_single} from "./list_single.mjs";
import {assert} from "./assert.mjs";
import {js_node_type_is} from "./js_node_type_is.mjs";
export function js_declare_single(vd) {
  let b = js_node_type_is(vd, "VariableDeclaration");
  assert(b);
  let {declarations} = vd;
  let declarators = list_single(declarations);
  return declarators;
}
