import { repo_functions_code } from "./repo_functions_code.mjs";
import { function_entries_names_code_includes_multiple } from "./function_entries_names_code_includes_multiple.mjs";
export async function repo_functions_names_code_includes_multiple(
  repo_name,
  texts,
) {
  "The functions in one repo whose source contains any one of several pieces of text.";
  "One repo rather than every one, for the same reason its single-piece twin is: a name from another repo cannot be resolved to a file here, so handing that wider answer to a transform produces a refusal per outside name and no rewrite.";
  let entries = await repo_functions_code(repo_name);
  let names = function_entries_names_code_includes_multiple(entries, texts);
  return names;
}
