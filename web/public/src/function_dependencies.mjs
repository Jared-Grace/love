import { each_async } from "../../../love/public/src/each_async.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists_assert } from "../../../love/public/src/function_exists_assert.mjs";
import { list_adder_unique_async } from "../../../love/public/src/list_adder_unique_async.mjs";
import { visit_unique_async } from "../../../love/public/src/visit_unique_async.mjs";
import { function_imports } from "../../../love/public/src/function_imports.mjs";
export async function function_dependencies(f_names) {
  let split = string_split_comma(f_names);
  await function_exists_assert(f_names);
  async function lambda2(la) {
    async function lambda3(item) {
      function lambda(v) {
        let node = object_property_get(v, "node");
        la(node);
      }
      await visit_unique_async(f_names, function_imports, lambda);
    }
    await each_async(split, lambda3);
  }
  let v2 = await list_adder_unique_async(lambda2);
  return v2;
}
