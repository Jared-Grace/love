import {js_code_await} from './js_code_await.mjs';
import {js_identifier_unique} from './js_identifier_unique.mjs';
import {js_imports_missing_add} from './js_imports_missing_add.mjs';
import {json_to} from "./json_to.mjs";
import {log} from "./log.mjs";
import {list_insert} from "./list_insert.mjs";
import {assert_not} from "./assert_not.mjs";
import {list_map} from "./list_map.mjs";
import {js_identifiers_names} from "./js_identifiers_names.mjs";
import {list_map_property} from "./list_map_property.mjs";
import {js_parse_statement} from "./js_parse_statement.mjs";
import {marker} from "./marker.mjs";
import {js_code_call_args} from "./js_code_call_args.mjs";
import {function_parse_declaration} from "./function_parse_declaration.mjs";
import {js_unparse} from "./js_unparse.mjs";
import {marker_next_get} from "./marker_next_get.mjs";
import {function_transform_marker} from "./function_transform_marker.mjs";
import {list_adder_async} from "./list_adder_async.mjs";
import {data_function_current_get} from "./data_function_current_get.mjs";
import {marker_next_index} from "./marker_next_index.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {list_includes} from "./list_includes.mjs";
import {list_add} from "./list_add.mjs";
import { js_node_is } from './js_node_is.mjs';
import { js_node_type_is } from './js_node_type_is.mjs';
export async function marker_call(f_name_call) {
  let {declaration, unaliased} = await function_parse_declaration(f_name_call);
  let f_name_current = await data_function_current_get();
  return list_adder_async(async la => {
    await function_transform_marker(f_name_current, lambda);
    function lambda(a) {
      let {index, stack2, ast, stack} = marker_next_index(a);
      let existing = js_identifiers_names(ast);
      let args = list_map_property(object_property_get(declaration, "params"), "name");
      let mapped = list_map(args, arg => {
        let arg_new = js_identifier_unique(existing, arg);
        return arg_new;
      });
      let code = js_code_call_args(unaliased, mapped);
      if (object_property_get(declaration, 'async')) {
        code = js_code_await(code);
      }
      let parsed = js_parse_statement(code);
      la(js_unparse(parsed));
      list_insert(stack2, index, parsed);
      js_imports_missing_add(ast);
      let stack_nodes=list_filter(stack, js_node_is)
      let fds=list_filter(stack, n=> js_node_type_is(n, 'FunctionDeclaration'))
      let last=list_last(fds)
    }
  });
}
