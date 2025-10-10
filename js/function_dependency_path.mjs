import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { less_than_by } from "../../../love/public/src/less_than_by.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_exists_assert } from "../../../love/public/src/function_exists_assert.mjs";
import { visit_unique_async } from "../../../love/public/src/visit_unique_async.mjs";
import { function_imports } from "../../../love/public/src/function_imports.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export async function function_dependency_path(f_name_from, f_name_to) {
  let result = null;
  marker("1");
  let { unaliased: from } = await function_name_unalias(f_name_from);
  let { unaliased: to } = await function_name_unalias(f_name_to);
  await each_async([from, to], function_exists_assert);
  function lambda(v) {
    let { node } = v;
    if (node === to) {
      let { stack } = v;
      if (result === null || less_than_by(stack, result, list_size)) {
        result = stack;
      }
    }
  }
  await visit_unique_async(from, function_imports, lambda);
  return result;
}
