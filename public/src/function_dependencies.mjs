import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists_assert } from "../../../love/public/src/function_exists_assert.mjs";
import { list_adder_unique_async } from "../../../love/public/src/list_adder_unique_async.mjs";
import { visit_unique_async } from "../../../love/public/src/visit_unique_async.mjs";
import { function_imports } from "../../../love/public/src/function_imports.mjs";
export async function function_dependencies(f_names) {
  let f_names2 = await functions_names();
  let dictionary = await list_to_dictionary_async(
    list,
    async function lambda5(item2) {},
  );
  async function lambda4(f_name) {
    await function_exists_assert(f_name);
  }
  await each_unordered_async(f_names, lambda4);
  async function lambda2(la) {
    async function lambda3(item) {
      function lambda(v) {
        let node = object_property_get(v, "node");
        la(node);
      }
      await visit_unique_async(item, function_imports, lambda);
    }
    await each_async(f_names, lambda3);
  }
  let v2 = await list_adder_unique_async(lambda2);
  return v2;
}
