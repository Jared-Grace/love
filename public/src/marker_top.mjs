import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { string_to } from "./string_to.mjs";
import { marker_first_index } from "./marker_first_index.mjs";
import { marker_first } from "./marker_first.mjs";
import { js_marker_insert } from "./js_marker_insert.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { function_imports_add } from "./function_imports_add.mjs";
import { js_imports_missing } from "./js_imports_missing.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { data_get } from "./data_get.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_call_statement } from "./js_code_call_statement.mjs";
import { marker } from "./marker.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { log } from "./log.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_parse } from "./function_parse.mjs";
import { list_add } from "./list_add.mjs";
import { js_markers } from "./js_markers.mjs";
import { list_map } from "./list_map.mjs";
import { js_marker_name_get } from "./js_marker_name_get.mjs";
export async function marker_top() {
  marker("2");
  let f_name = await data_function_current_get();
  await function_transform(f_name, lambda);
  function lambda(ast) {
    let markers = js_markers(ast);
    let names = list_map(markers, js_marker_name_get);
    let name_next = js_identifier_unique(names, "");
    let body = js_declaration_single_block_blody(ast);
    js_marker_insert(name_next, body, 0);
    js_imports_missing_add(ast);
  }
}
