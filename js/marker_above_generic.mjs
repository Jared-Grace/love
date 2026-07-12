import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { js_auto } from "./js_auto.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { property_get } from "./property_get.mjs";
import { marker_index } from "./marker_index.mjs";
export async function marker_above_generic(lambda$index, code) {
  async function lambda(a) {
    let i = marker_index(a);
    let index = property_get(i, "index");
    index = lambda$index(index);
    let stack_2 = property_get(i, "stack_2");
    let statement = js_parse_statement(code);
    list_insert(stack_2, index, statement);
    let ast = property_get(a, "ast");
    await js_auto(ast);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
