import { function_ast } from "./function_ast.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function functions_asts() {
  "Reads every function in every repository here and answers with the parsed shape of each, so a sweep can ask about code rather than about text.";
  let f_names = await functions_names();
  let asts = await list_map_unordered_async(f_names, function_ast);
  return asts;
}
