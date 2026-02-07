import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_block_insert } from "../../../love/public/src/js_block_insert.mjs";
import { js_declaration_name } from "../../../love/public/src/js_declaration_name.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export async function js_atomize_function(ast) {
  let fes = js_list_type(ast, "FunctionExpression");
  async function lambda(v) {
    let stack = object_property_get(v, "stack");
    const stack1 = list_get_end_1(stack);
    if (list_is(stack1)) {
      const stack2 = list_get_end_2(stack);
      let type_is = js_node_type_is(stack2, "CallExpression");
      if (type_is) {
        let node = object_property_get(v, "node");
        let name = js_declaration_name(node);
        let copy = object_copy(node);
        js_block_insert(stack, copy);
        let expression = js_parse_expression(name);
        object_replace(node, expression);
      }
    }
  }
  await each_async(fes, lambda);
}
