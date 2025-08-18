import { marker_previous_index } from "./marker_previous_index.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker_index } from "./marker_index.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_delete_above(code) {
  marker("1");
  async function lambda(a) {
    let i = marker_previous_index(a);
    let index = object_property_get(i, "index");
    let stack2 = object_property_get(i, "stack2");
    let statement = js_parse_statement(code);
    list_insert(stack2, index, statement);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
