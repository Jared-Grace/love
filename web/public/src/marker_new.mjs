import { marker_current_set } from "./marker_current_set.mjs";
import { js_marker_insert } from "./js_marker_insert.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { marker } from "./marker.mjs";
import { js_code_call_statement } from "./js_code_call_statement.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
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
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
export async function marker_new() {
  marker("1");
  let f_name = await data_function_current_get();
  await function_transform_marker(f_name, lambda);
  async function lambda(a) {
    let { index, stack2 } = marker_next_index(a);
    let name = "2";
    await js_marker_insert(name, stack2, index);
    marker_current_set(name);
  }
}
