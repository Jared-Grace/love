import { function_ast } from "../../../love/public/src/function_ast.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function functions_asts_list(list) {
  let waited = await list_map_unordered_async(list, function_ast);
  return waited;
}
