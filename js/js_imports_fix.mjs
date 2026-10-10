import { js_imports_missing_all } from "./js_imports_missing_all.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { import_from_dir } from "./import_from_dir.mjs";
import { function_imports_add_relative } from "./function_imports_add_relative.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { js_imports_shadowed_remove } from "./js_imports_shadowed_remove.mjs";
import { js_imports_paths_fix_inner } from "./js_imports_paths_fix_inner.mjs";
export async function js_imports_fix(ast) {
  "add missing BEFORE removing unused, so a wrongly-added import is caught in the same pass rather than surviving forever — same order as the relative auto-imports pass";
  let imports_missing = await js_imports_missing_all(ast);
  ("one read of where every function lives serves both the adding and the path fixing: nothing between them writes a file, they only change this tree, and each read walks every folder");
  let dictionary = await functions_names_to_paths();
  let from_dir = await import_from_dir(ast, dictionary);
  await function_imports_add_relative(
    ast,
    imports_missing,
    dictionary,
    from_dir,
  );
  await js_imports_unused_remove(ast);
  ("counting mentions cannot see an import a local of the same name stands in front of, so ask separately");
  js_imports_shadowed_remove(ast);
  await js_imports_paths_fix_inner(ast, dictionary);
}
