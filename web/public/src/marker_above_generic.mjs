import { function_transform_marker_current } from "../../../love/public/src/function_transform_marker_current.mjs";
import { js_auto } from "../../../love/public/src/js_auto.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { marker_index } from "../../../love/public/src/marker_index.mjs";
export async function marker_above_generic(lambda$index, code) {
  async function lambda(a) {
    let i = marker_index(a);
    let index = property_get(i, "index");
    index = lambda$index(index);
    let stack2 = property_get(i, "stack2");
    let statement = js_parse_statement(code);
    list_insert(stack2, index, statement);
    let ast = property_get(a, "ast");
    await js_auto(ast);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
