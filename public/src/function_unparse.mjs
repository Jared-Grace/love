import { file_js_unparse } from "./file_js_unparse.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_unparse(parsed) {
  await file_js_unparse(parsed);
}
