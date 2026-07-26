import { js_flo_name } from "./js_flo_name.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { js_identifier_nodes_bound_by } from "./js_identifier_nodes_bound_by.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_imports } from "./js_imports.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function js_free_names_scoped(ast) {
  "the same question the twin without the suffix answers — which mentions nothing in this file binds — but asked mention by mention instead of name by name. A name bound in one function and used in another is bound for the first and free for the second; the twin sees the binding, calls the name covered, and misses the ReferenceError in the second. Here a mention counts as covered only when a scope around that mention binds it.";
  "Two things it does not know yet, so read its answer as a candidate list and not as a verdict: a catch clause is not treated as a scope, so the name it binds reads as free, and the list of language globals it forgives is short, so Math and Promise and their kind read as free too. Comparing its answer before an edit against after cancels both, which is what it was built for.";
  let names = js_identifiers_referenced_names(ast);
  let imports = js_imports(ast);
  let globals = js_global_names();
  let name = js_flo_name(ast);
  let supplied = list_concat_multiple([imports, globals, [name]]);
  function free_is(candidate) {
    let covered = list_includes(supplied, candidate);
    if (covered) {
      return false;
    }
    let nodes = js_identifier_nodes_bound_by(ast, candidate, null);
    let any = not(list_empty_is(nodes));
    return any;
  }
  let free = list_filter(names, free_is);
  return free;
}
