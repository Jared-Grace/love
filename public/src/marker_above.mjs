import { identity } from "./identity.mjs";
import { js_auto } from "./js_auto.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker_index } from "./marker_index.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_above(code) {
  let fn = identity;
  marker("1");
  async function lambda(a) {
    let i = marker_index(a);
    let index = object_property_get(i, "index");
    index = fn(index);
    let stack2 = object_property_get(i, "stack2");
    let statement = js_parse_statement(code);
    list_insert(stack2, index, statement);
    let ast = object_property_get(a, "ast");
    await js_auto(ast);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
