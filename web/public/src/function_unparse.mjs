import { file_js_unparse } from "./file_js_unparse.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_unparse(parsed) {
    let {f_name, ast} = parsed
  const f_path = await function_name_to_path_unalias(f_name);
  await file_js_unparse(f_path, ast);
}
