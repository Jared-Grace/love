import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { function_imports } from "./function_imports.mjs";
export async function function_dependencies(f_name) {
  async function lambda2(la) {
    function lambda(v) {
      let { node } = v;
      la(node);
    }
    await visit_unique_async(f_name, function_imports, lambda);
  }
  let v2 = await list_adder_unique_async(lambda2);
  return v2;
}
