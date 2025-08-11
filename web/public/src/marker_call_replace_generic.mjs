import {js_unparse} from './js_unparse.mjs';
import {js_imports_missing_add} from './js_imports_missing_add.mjs';
import {list_get} from './list_get.mjs';
import {object_property_get} from './object_property_get.mjs';
import {list_single} from './list_single.mjs';
import {list_multiple_is} from './list_multiple_is.mjs';
import {js_node_type_is} from './js_node_type_is.mjs';
import {marker_next_get} from './marker_next_get.mjs';
import {function_transform_marker} from './function_transform_marker.mjs';
import {list_adder_async} from './list_adder_async.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {integer_to} from './integer_to.mjs';
import { object_merge } from './object_merge.mjs';
export async function marker_call_replace_generic(input, lambda2) {
  let arg_index = integer_to(input);
  let f_name = await data_function_current_get();
  return list_adder_async(async la => {
    await function_transform_marker(f_name, lambda);
    function lambda(a) {
      let next = marker_next_get(a);
      let expression = null;
      if (js_node_type_is(next, "ExpressionStatement")) {
        let {expression: expression_next} = next;
        expression = expression_next;
      } else if (js_node_type_is(next, "VariableDeclaration")) {
        let {declarations} = next;
        if (list_multiple_is(declarations)) {
          return;
        }
        let declaration = list_single(declarations);
        expression = object_property_get(declaration, "init");
      }
      if (js_node_type_is(expression, "AwaitExpression")) {
        expression = object_property_get(expression, "argument");
      }
      if (!js_node_type_is(expression, "CallExpression")) {
        return;
      }
      let {arguments: arguments2} = expression;
      let replaced = null;
      if (input === "c") {
        let {callee} = expression;
        replaced = callee;
      } else {
        let arg_index_at = list_get(arguments2, arg_index);
        replaced = arg_index_at;
      }
      lambda2(object_merge({replaced},a));
      let {ast} = a;
      js_imports_missing_add(ast);
      la(js_unparse(next));
    }
  });
}
