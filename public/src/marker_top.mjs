import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { js_marker_insert } from "../../../love/public/src/js_marker_insert.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_markers } from "../../../love/public/src/js_markers.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_marker_name_get } from "../../../love/public/src/js_marker_name_get.mjs";
export async function marker_top() {
  marker("1");
  let f_name = await function_current_get();
  let v = await function_transform(f_name, lambda);
  return v;
  async function lambda(ast) {
    let markers = js_markers(ast);
    let ne = list_empty_not_is(markers);
    if (ne) {
      return;
    }
    let names = list_map(markers, js_marker_name_get);
    let name_next = await js_identifier_unique(names, "");
    let body = js_declaration_single_block_body(ast);
    await js_marker_insert(name_next, body, 0);
    await js_imports_missing_add(ast);
  }
}
