import { list_includes_not } from "./list_includes_not.mjs";
import { function_imports } from "./function_imports.mjs";
import { functions_import_ignored } from "./functions_import_ignored.mjs";
import { list_filter } from "./list_filter.mjs";
export async function function_imports_beyond_infrastructure(f_name) {
  "What a function imports, with the plumbing every function sits on left out. Walking the import graph with this instead of the plain one is what makes the answer about the function rather than about the package manager underneath it.";
  let imports = await function_imports(f_name);
  let ignored = functions_import_ignored();
  function kept_is(name) {
    let b = list_includes_not(ignored, name);
    return b;
  }
  let kept = list_filter(imports, kept_is);
  return kept;
}
