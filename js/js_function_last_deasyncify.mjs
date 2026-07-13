import { list_difference } from "./list_difference.mjs";
import { list_add } from "./list_add.mjs";
import { js_await_remove_inner } from "./js_await_remove_inner.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { each_async } from "./each_async.mjs";
import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { equal } from "./equal.mjs";
import { js_flo } from "./js_flo.mjs";
import { not } from "./not.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { js_function_await_any_is } from "./js_function_await_any_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export async function js_function_last_deasyncify(
  stack,
  ast,
  functions,
  visited,
) {
  let f = js_stack_last_function(stack);
  let property_name = "async";
  let async = property_get(f, property_name);
  if (not(async)) {
    return;
  }
  let has_await = js_function_await_any_is(ast, f);
  if (has_await) {
    return;
  }
  property_set(f, property_name, false);
  let declaration = js_flo(ast);
  if (equal(f, declaration)) {
    let name = js_function_declaration_name(declaration);
    let value = property_get(functions, name);
    property_set(value, property_name, false);
    let result = await data_identifiers_search(name);
    let properties = properties_get(result);
    let difference = list_difference(properties, visited);
    async function lambda(f_name) {
      async function lambda2(ast) {
        list_add(visited, f_name);
        let v = await js_await_remove_inner(functions, ast, visited);
        return v;
      }
      let output = await function_transform(f_name, lambda2);
    }
    await each_async(difference, lambda);
  }
}
