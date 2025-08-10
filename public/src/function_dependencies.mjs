import { visit_async } from "./visit_async.mjs";
import { function_imports } from "./function_imports.mjs";
import { js_imports } from "./js_imports.mjs";
import { function_parse } from "./function_parse.mjs";
import { marker } from "./marker.mjs";
export async function function_dependencies(f_name) {
  let found = [];
  let imports = await function_imports(f_name);
  visit_async();
  return imports;
}
