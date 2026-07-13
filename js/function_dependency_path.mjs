import { property_get } from "./property_get.mjs";
import { list_size_less_than_other } from "./list_size_less_than_other.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { each_async } from "./each_async.mjs";
import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependency_path(f_name_from, f_name_to) {
  let result = null;
  let v2 = await function_name_unalias(f_name_from);
  let from = property_get(v2, "unaliased");
  let v3 = await function_name_unalias(f_name_to);
  let to = property_get(v3, "unaliased");
  async function lambda2(f_name) {
    await function_exists_assert_json(f_name, {
      hint: "the from and to functions should both exist to trace a dependency path between them",
    });
  }
  await each_async([from, to], lambda2);
  function lambda(v) {
    let node = property_get(v, "node");
    if (node === to) {
      let stack = property_get(v, "stack");
      if (result === null || list_size_less_than_other(stack, result)) {
        result = stack;
      }
    }
  }
  await visit_unique_async(from, function_imports, lambda);
  return result;
}
