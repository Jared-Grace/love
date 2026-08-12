import { functions_exports_names } from "./functions_exports_names.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { path_directory } from "./path_directory.mjs";
import { js_imports_unexported } from "./js_imports_unexported.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { not } from "./not.mjs";
export async function functions_imports_unexported() {
  "Every function here whose import lines ask a neighbouring file for a name that file does not give out, each named beside the names that go unanswered";
  "What every file gives out is gathered once before the sweep starts. Asking the neighbour afresh at each import line would read the same file over and over - there are more than thirty-two thousand import lines here across some eight thousand files, so nearly every file would be read a few times and a handful of them thousands of times.";
  let given = await functions_exports_names();
  let paths = await functions_names_to_paths();
  function reader(ast) {
    let f_name = js_flo_name(ast);
    let own = property_get_or_null(paths, f_name);
    if (not(own)) {
      let none = [];
      return none;
    }
    let dir = path_directory(own);
    let unexported = js_imports_unexported(ast, dir, given);
    return unexported;
  }
  let offenders = await functions_ast_offenders_generic(reader, "unexported");
  return offenders;
}
