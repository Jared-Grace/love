import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_imports_module_names } from "./js_imports_module_names.mjs";
import { list_any } from "./list_any.mjs";
import { list_includes } from "./list_includes.mjs";
import { node_only_module_names } from "./node_only_module_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split_first } from "./text_split_first.mjs";
export async function function_node_only_is(f_path) {
  "$plain f_path";
  "True when this file names a module a browser cannot make good on, and offers the browser no branch to take instead.";
  "★ IT READS THE FILE'S IMPORTS RATHER THAN SEARCHING ITS TEXT. Searching found the same words wherever they sat, and a file that teaches how an import is written holds one as its subject matter - so a widened search called two lessons about paths node-only code. Reading the imports asks the file what it actually brings in, and a word inside a piece of writing is a piece of writing.";
  "A name spelt with a folder after it is answered for by the part in front of it as well, so a library that only works on a machine is caught however deep into it the file reaches.";
  arguments_assert(arguments, 1);
  let parsed = await file_js_parse(f_path);
  let code = property_get(parsed, "code");
  let guard = fn_name("browser_is");
  let guarded = text_includes(code, guard);
  if (guarded) {
    return false;
  }
  let ast = property_get(parsed, "ast");
  let imported = js_imports_module_names(ast);
  let node_only = node_only_module_names();
  function lambda(name) {
    let whole = list_includes(node_only, name);
    if (whole) {
      return true;
    }
    let root = text_split_first(name, "/");
    let rooted = list_includes(node_only, root);
    return rooted;
  }
  let any = list_any(imported, lambda);
  return any;
}
