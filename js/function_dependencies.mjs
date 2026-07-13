import { each_unordered_async } from "./each_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(f_names) {
  async function lambda4(f_name) {
    await function_exists_assert_json(f_name, {
      hint: "each function should exist to gather its dependencies",
    });
  }
  await each_unordered_async(f_names, lambda4);
  async function lambda2(la) {
    async function lambda3(item) {
      function lambda(v) {
        let node = property_get(v, "node");
        la(node);
      }
      await visit_unique_async(item, function_imports, lambda);
    }
    await each_unordered_async(f_names, lambda3);
  }
  let v2 = await list_adder_unique_async(lambda2);
  return v2;
}
