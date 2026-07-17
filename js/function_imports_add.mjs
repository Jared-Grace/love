import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir } from "./import_from_dir.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
export async function function_imports_add(ast, imports) {
  let dictionary = await functions_names_to_paths();
  let from_dir = import_from_dir(ast, dictionary);
  await function_imports_add_relative(ast, imports, dictionary, from_dir);
  return;
}
