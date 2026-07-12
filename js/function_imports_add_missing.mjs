import { function_imports_add } from "./function_imports_add.mjs";
import { property_get } from "./property_get.mjs";
import { function_imports_missing } from "./function_imports_missing.mjs";
export async function function_imports_add_missing(f_name) {
  let parsed = await function_imports_missing(f_name);
  let ast = property_get(parsed, "ast");
  let imports_missing = property_get(parsed, "imports_missing");
  await function_imports_add(ast, imports_missing);
  let r = {
    ast,
    parsed,
  };
  return r;
}
