import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_name_only_imports } from "./js_code_name_only_imports.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_name_only_imports_spell } from "./js_name_only_imports_spell.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function function_name_only_imports_spell(f_name) {
  arguments_assert(arguments, 1);
  ("Turns this file's spelling-only imports into the words themselves, and repairs");
  ("the imports so the file still loads.");
  ("Which names those are is read off the file rather than handed over, because the");
  ("answer is a property of the file and nothing else - a caller who named them");
  ("could name one the file still calls, and taking that import away would break it");
  ("at load time. There is no reading to be done here and so no choice to give");
  ("anybody.");
  ("The import left standing with nothing reading it is swept by the same pass that");
  ("adds the one the new spelling needs, which is why both happen in the one walk.");
  let paths = await functions_names_to_paths();
  let f_path = property_get(paths, f_name);
  let code = await file_read(f_path);
  let before = js_code_name_only_imports(code);
  let from_dir = import_from_dir_path(f_path);
  async function lambda(ast) {
    js_name_only_imports_spell(ast);
    await js_imports_auto_relative(ast, paths, from_dir);
  }
  await file_js_transform(f_path, lambda);
  let after_code = await file_read(f_path);
  let after = js_code_name_only_imports(after_code);
  ("Asked again afterwards, because a repair that reports what it meant to do rather");
  ("than what happened is the one shape of report nobody can check");
  let r = {
    f_name,
    spelled: before,
    left: after,
  };
  return r;
}
