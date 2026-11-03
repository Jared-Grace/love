import { arguments_assert } from "./arguments_assert.mjs";
import { functions_auto_machine_read_only } from "./functions_auto_machine_read_only.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_machine_reasons_memo } from "./function_machine_reasons_memo.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_set } from "./property_set.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { js_imports } from "./js_imports.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
export async function function_machine_unlisted_paths_memo(f_name, context) {
  "For each function touching the machine directly that this one can reach and that is not on the read-only list, one chain of calls showing how it gets there.";
  "★ THE WHOLE IMPORT GRAPH IS WALKED, PLUMBING INCLUDED. The other walks skip plumbing to keep their answers about the function, which is right for a list of named dangers and wrong here, where the question is whether anything at all down there writes or sends.";
  "Asked of a function that cannot be read, this throws rather than answering, because a verdict that could not be reached must not read as a clean one.";
  arguments_assert(arguments, 2);
  let read_only = functions_auto_machine_read_only();
  let parsed = property_get(context, "parsed");
  let paths = {};
  async function on_each(v) {
    let node = property_get(v, "node");
    let listed = list_includes(read_only, node);
    if (listed) {
      return;
    }
    let reasons = await function_machine_reasons_memo(node, context);
    let none = list_empty_is(reasons);
    if (none) {
      return;
    }
    let stack = property_get(v, "stack");
    property_set(paths, node, stack);
  }
  async function children_get(name) {
    let listed = list_includes(read_only, name);
    if (listed) {
      let r = [];
      return r;
    }
    let ast = await function_ast_memo(name, parsed);
    let imports = js_imports(ast);
    return imports;
  }
  await visit_unique_async(f_name, children_get, on_each);
  return paths;
}
