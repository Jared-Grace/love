import { repo_functions_code } from "./repo_functions_code.mjs";
import { function_entries_names_code_includes } from "./function_entries_names_code_includes.mjs";
export async function repo_functions_names_code_includes(repo_name, text) {
  "The functions in one repo whose source contains a given piece of text.";
  "This is the one a sweep that rewrites wants. Its cross-repo twin answers a wider question and is right for asking who mentions something, but a name from another repo cannot be resolved to a file here, so handing that wider answer to a transform produces a refusal per outside name and no rewrite. That is not hypothetical - it is how this function came to exist.";
  let entries = await repo_functions_code(repo_name);
  let names = function_entries_names_code_includes(entries, text);
  return names;
}
