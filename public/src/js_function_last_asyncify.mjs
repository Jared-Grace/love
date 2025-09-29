import { log } from "./log.mjs";
import { js_await_add_inner } from "./js_await_add_inner.mjs";
import { js_declaration_name } from "./js_declaration_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { each_async } from "./each_async.mjs";
import { object_properties } from "./object_properties.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { equal } from "./equal.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function js_function_last_asyncify(
  stack,
  async_is,
  ast,
  functions,
) {
  marker("1");
  let f = js_stack_last_function(stack);
  let property_name = "async";
  let async = object_property_get(f, property_name);
  if (async_is && not(async)) {
    object_property_set(f, property_name, true);
    let declaration = js_declaration_single(ast);
    if (equal(f, declaration)) {
      let name = js_declaration_name(declaration);
      let value = object_property_get(functions, name);
      object_property_set(value, property_name, true);
      let result = await data_identifiers_search(name);
      let properties = object_properties(result);
      async function lambda(f_name) {
        log({f_name});
        async function lambda2(ast) {
          let v = await js_await_add_inner(functions, ast);
          return v;
        }
        let output = await function_transform(f_name, lambda2);
      }
      await each_async(properties, lambda);
    }
  }
}
