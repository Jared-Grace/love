import { function_parse } from "./function_parse.mjs";
import { js_declarations } from "./js_declarations.mjs";

export async function function_imports_missing_add(f_name) {
  let parsed = await function_parse(f_name);
  let declarations = js_declarations(parsed);
  console.log(declarations)
}