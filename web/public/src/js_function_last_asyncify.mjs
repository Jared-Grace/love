import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_await_add_inner } from "../../../love/public/src/js_await_add_inner.mjs";
import { js_declaration_name } from "../../../love/public/src/js_declaration_name.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_stack_last_function } from "../../../love/public/src/js_stack_last_function.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function js_function_last_asyncify(
  stack,
  async_is,
  ast,
  functions,
  visited,
) {
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
      let properties = properties_get(result);
      let difference = list_difference(properties, visited);
      return;
      async function lambda(f_name) {
        async function lambda2(ast) {
          list_add(visited, name);
          let v = await js_await_add_inner(functions, ast, visited);
          return v;
        }
        let output = await function_transform(f_name, lambda2);
      }
      await each_async(difference, lambda);
    }
  }
}
