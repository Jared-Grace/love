import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { each_pair } from "./each_pair.mjs";
import { list_concat } from "./list_concat.mjs";
import { lists_get } from "./lists_get.mjs";
import { each_index } from "./each_index.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_all } from "./list_all.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { js_declaration_params_names } from "./js_declaration_params_names.mjs";
import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_get } from "./list_get.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { log } from "./log.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { function_parse } from "./function_parse.mjs";
import { assert } from "./assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { error } from "./error.mjs";
export async function marker_expand() {
  let f_name = await data_function_current_get();
  return list_adder_async(async (la) => {
    await function_transform_marker(f_name, lambda2);
    async function lambda2(a) {
      let next = marker_next_get(a);
      let expression = js_statement_call_get(next);
      if (expression === null) {
        return;
      }
      let { callee } = expression;
      let { arguments: arguments2 } = expression;
      const a_names = js_identifiers_to_names(arguments2);
      let { name } = callee;
      let { declaration, ast } = await function_parse_declaration(name);
      let identifiers = js_identifiers_names(ast);
      let intesection = list_intersect(identifiers, arguments2);
      if (list_empty_not_is(intesection)) {
        error("todo");
      }
      let params_names = js_declaration_params_names(declaration);
      each_pair(params_names, a_names, lambda3);
      function lambda3(param_name, a_name) {}
      let body_block = js_declaration_to_block_body(declaration);
      let output = js_unparse(next);
      la(output);
    }
  });
}
