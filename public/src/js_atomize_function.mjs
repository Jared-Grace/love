import { js_block_insert } from "./js_block_insert.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { each_async } from "./each_async.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_type } from "./js_type.mjs";
import { marker } from "./marker.mjs";
import { list_is } from "./list_is.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export async function js_atomize_function(ast) {
  marker("1");
  let fes = js_type(ast, "FunctionExpression");
  async function lambda(v) {
    let { stack } = v;
    const stack1 = list_get_end_1(stack);
    if (list_is(stack1)) {
      const stack2 = list_get_end_2(stack);
      let type_is = js_node_type_is(stack2, "CallExpression");
      if (type_is) {
        let { node } = v;
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
