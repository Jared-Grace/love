import { js_imports } from "../../../love/public/src/js_imports.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_imports(f_name) {
  let { ast } = await function_parse_unaliased(f_name);
  let imports = js_imports(ast);
  return imports;
}
