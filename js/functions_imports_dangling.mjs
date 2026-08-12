import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { path_directory } from "./path_directory.mjs";
import { js_imports_dangling } from "./js_imports_dangling.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { not } from "./not.mjs";
export async function functions_imports_dangling() {
  "Every function here whose import lines name a file that is not there, each named beside the paths that lead nowhere";
  "Where each function's file sits is looked up once for the whole sweep, because a dotted path is read from the folder its own file stands in and the repositories here do not all share one.";
  "A function whose file the lookup does not know is passed over rather than guessed at, since there is no folder to read its paths from.";
  let paths = await functions_names_to_paths();
  async function reader(ast) {
    let f_name = js_flo_name(ast);
    let own = property_get_or_null(paths, f_name);
    if (not(own)) {
      let none = [];
      return none;
    }
    let dir = path_directory(own);
    let dangling = await js_imports_dangling(ast, dir);
    return dangling;
  }
  let offenders = await functions_ast_offenders_generic(reader, "dangling");
  return offenders;
}
