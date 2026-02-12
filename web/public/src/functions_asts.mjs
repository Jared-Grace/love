import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_asts() {
  let f_names = await functions_names();
  let asts = list_map(f_names, function_ast);
  return asts;
}
