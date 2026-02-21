import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_size_less_than } from "../../../love/public/src/list_size_less_than.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_exists_assert } from "../../../love/public/src/function_exists_assert.mjs";
import { visit_unique_async } from "../../../love/public/src/visit_unique_async.mjs";
import { function_imports } from "../../../love/public/src/function_imports.mjs";
export async function function_dependency_path(f_name_from, f_name_to) {
  let result = null;
  let v2 = await function_name_unalias(f_name_from);
  let from = property_get(v2, "unaliased");
  let v3 = await function_name_unalias(f_name_to);
  let to = property_get(v3, "unaliased");
  await each_async([from, to], function_exists_assert);
  function lambda(v) {
    let node = property_get(v, "node");
    if (node === to) {
      let stack = property_get(v, "stack");
      if (result === null || list_size_less_than(stack, result)) {
        result = stack;
      }
    }
  }
  await visit_unique_async(from, function_imports, lambda);
  return result;
}
