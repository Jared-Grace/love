import { js_function_arguments_assert_count_repair } from "./js_function_arguments_assert_count_repair.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { not } from "./not.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
export async function function_params_new_generic(
  function_transform_current_lambda,
  on_call,
  f_name,
) {
  "The line counting the function's arguments is put right as part of the same change, because the change is what makes it wrong. Every command that alters the list of names comes through here - adding, deleting, swapping, moving - so the one place is enough for all of them, and none of them has to remember.";
  "Left undone, the function was broken outright and quietly. Nothing shows until something calls it, and then the line throws saying the caller handed over the wrong number, which sends the first reader to the calling file, where nothing is wrong.";
  async function transform_and_count(ast) {
    await function_transform_current_lambda(ast);
    js_function_arguments_assert_count_repair(ast);
  }
  await function_transform(f_name, transform_and_count);
  let result = await data_identifiers_search(f_name);
  let properties = properties_get(result);
  async function lambda4(f_name_caller) {
    let v = await function_unalias_exists(f_name_caller);
    let exists = property_get(v, "exists");
    if (not(exists)) {
      return;
    }
    async function lambda5(ast) {
      js_visit_calls_named(ast, f_name, lambda);
      function lambda({ args, v: v2 }) {
        on_call(args);
      }
      await js_imports_missing_add_all(ast);
    }
    await function_transform(f_name_caller, lambda5);
  }
  await each_async(properties, lambda4);
}
