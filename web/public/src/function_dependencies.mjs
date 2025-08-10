import { visit_unique_async } from "./visit_unique_async.mjs";
import { visit_async } from "./visit_async.mjs";
import { function_imports } from "./function_imports.mjs";
import { js_imports } from "./js_imports.mjs";
import { function_parse } from "./function_parse.mjs";
import { marker } from "./marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function function_dependencies(f_name) {
  await list_adder_async(async (la) => {
    await visit_unique_async(f_name, function_imports, la);
  });
  return imports;
}
