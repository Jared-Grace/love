import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { list_previous } from "../../../love/public/src/list_previous.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_return_above_combine(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let stack = property_get(v, "stack");
    let e1 = list_get_end_1(stack);
    let l = list_is(e1);
    if (not(l)) {
      return;
    }
    let fi = list_first_is(e1, node);
    if (fi) {
      return;
    }
    let previous = list_previous(e1, node);
    function lambda3() {
      let declarations = property_get(previous, "declarations");
      let s1 = list_size_1(declarations);
      if (s1) {
        let only = list_single(list);
      }
      log({
        declarations,
      });
    }
    js_node_type_is_if(previous, "VariableDeclaration", lambda3);
  }
  js_visit_type(ast, "ReturnStatement", lambda);
  let a = null;
  return a;
}
