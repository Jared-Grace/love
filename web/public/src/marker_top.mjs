import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_marker_insert } from "./js_marker_insert.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_imports_missing_add } from "./js_imports_missing_add.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { js_markers } from "./js_markers.mjs";
import { list_map } from "./list_map.mjs";
import { js_marker_name_get } from "./js_marker_name_get.mjs";
export async function marker_top() {
  marker("1");
  let f_name = await data_function_current_get();
  let v = await function_transform(f_name, lambda);
  return v;
  async function lambda(ast) {
    let markers = js_markers(ast);
    let ne = list_empty_not_is(markers);
    if (ne) {
      return;
    }
    let names = list_map(markers, js_marker_name_get);
    let name_next = js_identifier_unique(names, "");
    let body = js_declaration_single_block_blody(ast);
    await js_marker_insert(name_next, body, 0);
    await js_imports_missing_add(ast);
  }
}
