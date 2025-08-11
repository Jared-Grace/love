import { list_next } from "./list_next.mjs";
import { each_async } from "./each_async.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_declare_init_set } from "./js_declare_init_set.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
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
export async function js_atomize(ast) {
  let existing = js_identifiers(ast);
  let ces = js_type(ast, "CallExpression");
  marker();
  await each_async(ces, async (v) => {
    let { node } = v;
    let { stack } = v;
    const stack1 = list_get_end(stack, 1);
    if (list_is(stack1)) {
      let variable_name = "v";
      let { callee } = node;
      if (js_node_type_is(callee, "Identifier")) {
        let { name } = callee;
        let { ast: ast_callee } = await function_parse(name);
        log({
          name,
          ast_callee,
        });
        let return_name = js_return_name(ast_callee);
        if (return_name !== null) {
          variable_name = return_name;
        }
      }
      let unique = js_identifier_unique(existing, variable_name);
      let copy = object_copy(node);
      let block = js_stack_last(stack, "BlockStatement");
      let block_body = list_next(stack, block);
      let block_body_item = list_next(stack, block_body);
      let block_body_item_index = list_index_of(block_body, block_body_item);
      let assign_code = js_code_let_assign(unique, "a");
      let assign = js_parse_statement(assign_code);
      js_declare_init_set(assign, copy);
      list_insert(block_body, block_body_item_index, assign);
      let v2 = js_parse_expression(unique);
      object_replace(node, v2);
    }
  });
}
