import { list_empty_is } from "./list_empty_is.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir } from "./import_from_dir.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
export async function function_imports_add(ast, imports) {
  "Nothing to add leaves the tree exactly as it was, so the folder reads below are skipped: they walk every repository, and most files a pass touches need no new import - the operator step alone asked twice per file for nothing.";
  let e = list_empty_is(imports);
  if (e) {
    return;
  }
  let dictionary = await functions_names_to_paths();
  let from_dir = await import_from_dir(ast, dictionary);
  await function_imports_add_relative(ast, imports, dictionary, from_dir);
}
