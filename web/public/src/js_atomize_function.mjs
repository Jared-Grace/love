import { js_block_insert } from "./js_block_insert.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { js_declare } from "./js_declare.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
import { list_next } from "./list_next.mjs";
import { each_async } from "./each_async.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_declare_init_set } from "./js_declare_init_set.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
import { list_is } from "./list_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_insert } from "./list_insert.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { function_parse } from "./function_parse.mjs";
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
