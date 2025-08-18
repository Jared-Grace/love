import { list_remove_at } from "./list_remove_at.mjs";
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
    let p = marker_previous_index(a);
    let index = object_property_get(p, "index");
    let stack2 = object_property_get(p, "stack2");
    list_remove_at(stack2, index);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
