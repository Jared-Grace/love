import { property_get } from "./property_get.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_imports } from "./js_imports.mjs";
export async function function_imports(f_name) {
  let v = await function_parse(f_name);
  let ast = property_get(v, "ast");
  let imports = js_imports(ast);
  return imports;
}
