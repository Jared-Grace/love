import { todo } from "./todo.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_return_on } from "./js_return_on.mjs";
import { list_last } from "./list_last.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_identifier_replace } from "./js_identifier_replace.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { each_pair } from "./each_pair.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { list_map } from "./list_map.mjs";
import { noop } from "./noop.mjs";
import { list_add } from "./list_add.mjs";
export async function marker_expand() {
  let f_name = await data_function_current_get();
  let v = await function_transform_marker(f_name, lambda2);
  return v;
  async function lambda2(a) {
    let { next, index } = marker_next_get(a);
    let inserted = null;
    let { expression, declaration: declaration_call } =
      js_statement_call_get(next);
    if (expression !== null) {
      let { callee } = expression;
      let { arguments: arguments2 } = expression;
      const a_names = js_identifiers_to_names(arguments2);
      let { name } = callee;
      let { declaration, ast } = await function_parse_declaration(name);
      let identifiers = js_identifiers_names(ast);
      let intesection = list_intersect(identifiers, arguments2);
      if (list_empty_not_is(intesection)) {
        todo();
      }
      let params_names = js_declaration_params_names(declaration);
      each_pair(params_names, a_names, lambda3);
      function lambda3(param_name, a_name) {
        js_identifier_replace(ast, param_name, a_name);
      }
      let body_block = js_declaration_to_block_body(declaration);
      let last = list_last(body_block);
      function lambda() {
        list_remove(body_block, last);
        let { argument } = last;
        let name = js_declaration_name(declaration_call);
        let assign = js_declare(name, argument);
        list_add(body_block, assign);
      }
      js_return_on(last, lambda, noop);
      let { stack2 } = a;
      list_remove(stack2, next);
      each_reverse(body_block, lambda4);
      function lambda4(item) {
        list_insert(stack2, index, item);
      }
      inserted = list_map(body_block, js_unparse);
    }
    return inserted;
  }
}
