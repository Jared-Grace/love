import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { marker } from "./marker.mjs";
export async function js_await_add(ast) {
  let value = await data_property_get("functions");
  marker("1");
  let name = js_declaration_single_name(ast2);
  async function lambda(v) {
    let node = object_property_get(v, "node");
    async function lambda3() {
      marker("2");
      let stack = object_property_get(v, "stack");
    }
    await js_call_function_if(node, lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
