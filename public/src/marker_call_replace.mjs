import { marker_call_replace_generic } from "./marker_call_replace_generic.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { object_replace } from "./object_replace.mjs";
import { integer_to } from "./integer_to.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert } from "./assert.mjs";
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
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
export async function marker_call_replace(input, code_replacement) {
  return await marker_call_replace_generic(input, lambda2);
  function lambda2(replaced) {
    let replacement = js_parse_expression(code_replacement);
    object_replace(replaced, replacement);
  }
}
