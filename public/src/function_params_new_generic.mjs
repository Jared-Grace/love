import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_visit_calls_named } from "../../../love/public/src/js_visit_calls_named.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function function_params_new_generic(
  function_transform_current_lambda,
  on_call,
  f_name,
) {
  await function_transform(f_name, function_transform_current_lambda);
  let result = await data_identifiers_search(f_name);
  let properties = properties_get(result);
  async function lambda4(f_name_caller) {
    let v = await function_unalias_exists(f_name_caller);
    let exists = object_property_get(v, "exists");
    if (not(exists)) {
      return;
    }
    async function lambda5(ast) {
      js_visit_calls_named(ast, f_name, lambda);
      function lambda({ args, v }) {
        on_call(args);
      }
    }
    let output = await function_transform(f_name_caller, lambda5);
  }
  await each_async(properties, lambda4);
}
