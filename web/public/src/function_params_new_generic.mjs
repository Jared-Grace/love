import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_transform_current } from "../../../love/public/src/function_transform_current.mjs";
export async function function_params_new_generic(
  function_transform_current_lambda,
  on_call,
) {
  await function_transform_current(function_transform_current_lambda);
  let f_name_current = await function_current_get();
  let result = await data_identifiers_search(f_name_current);
  let properties = object_properties(result);
  async function lambda4(f_name) {
    let { exists } = await function_exists(f_name);
    if (not(exists)) {
      return;
    }
    async function lambda5(ast) {
      js_visit_calls_named(f_name_current, lambda, ast);
      function lambda({ args }) {
        on_call(args);
      }
    }
    let output = await function_transform(f_name, lambda5);
  }
  await each_async(properties, lambda4);
}
