import {function_transform_marker} from './function_transform_marker.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {list_remove} from './list_remove.mjs';
import {error} from './error.mjs';
import {log} from "./log.mjs";
import {list_get_end} from "./list_get_end.mjs";
import {js_visit_type} from "./js_visit_type.mjs";
import {list_add_first} from "./list_add_first.mjs";
import {js_parse_statement} from "./js_parse_statement.mjs";
import {js_code_call_statement} from "./js_code_call_statement.mjs";
import {js_declaration_single} from "./js_declaration_single.mjs";
import {function_transform} from "./function_transform.mjs";
import {marker} from "./marker.mjs";
import {js_node_is} from "./js_node_is.mjs";
import {js_node_type_is} from "./js_node_type_is.mjs";
import {list_is} from "./list_is.mjs";
export async function marker_remove() {
  let f_name = await data_function_current_get();
  await function_transform_marker(f_name, lambda);
  function lambda(a) {
    let {stack2, stack1} = a;
    list_remove(stack2, stack1);
  }
}
