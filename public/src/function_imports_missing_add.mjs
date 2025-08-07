import { function_imports_missing } from "./function_imports_missing.mjs";
import { js_parse } from "./js_parse.mjs";

export async function function_imports_missing_add(f_name) {
  let { imports_missing, parsed } = await function_imports_missing(f_name);
  let { body } = parsed;
  let code = "import {} from ''";
  js_parse(code);
  console.log(parsed);
}
