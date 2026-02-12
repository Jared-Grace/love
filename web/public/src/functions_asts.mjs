import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function functions_asts() {
  let f_names = await functions_names();
  let asts = await list_map_unordered_async(f_names, function_ast);
  return asts;
}
