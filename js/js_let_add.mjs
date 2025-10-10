import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { js_identifier_defineds } from "../../../love/public/src/js_identifier_defineds.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_let_add(ast) {
  function lambda(v) {
    let { stack } = v;
    let stack1 = list_get_end_1(stack);
    let type_is = js_node_type_is(stack1, "ExpressionStatement");
    if (not(type_is)) {
      return;
    }
    let { node } = v;
    let { left, right } = node;
    let ii = js_identifier_is(left);
    if (not(ii)) {
      return;
    }
    let name = object_property_get(left, "name");
    let defineds = js_identifier_defineds(v);
    let includes = list_includes(defineds, name);
    if (includes) {
      return;
    }
    let assign = js_declare(name, right);
    object_replace(stack1, assign);
  }
  js_visit_type(ast, "AssignmentExpression", lambda);
  return;
}
