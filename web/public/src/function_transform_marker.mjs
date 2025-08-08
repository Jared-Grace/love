import {error} from './error.mjs';
import {list_is} from './list_is.mjs';
import {marker} from './marker.mjs';
import {js_node_type_is} from './js_node_type_is.mjs';
import {js_node_is} from './js_node_is.mjs';
import {list_get_end} from './list_get_end.mjs';
import {js_visit_type} from './js_visit_type.mjs';
import {function_transform} from './function_transform.mjs';
export async function function_transform_marker(f_name, lambda) {
  await function_transform(f_name, lambda_marker);
  function lambda_marker(ast) {
    js_visit_type(ast, "CallExpression", v => {
      let {stack} = v;
      let stack1 = list_get_end(stack, 1);
      if (!js_node_is(stack1)) {
        return;
      }
      if (!js_node_type_is(stack1, "ExpressionStatement")) {
        return;
      }
      let {node} = v;
      let {callee} = node;
      if (!js_node_type_is(callee, "Identifier")) {
        return;
      }
      let {name} = callee;
      if (name !== marker.name) {
        return;
      }
      let stack2 = list_get_end(stack, 2);
      if (!list_is(stack2)) {
        error();
      }
      lambda({
        stack2,
        stack1
      });
    });
  }
}
