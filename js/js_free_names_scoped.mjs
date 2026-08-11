import { js_names_unbound_mentioned } from "./js_names_unbound_mentioned.mjs";
import { set_includes } from "./set_includes.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_free_names_scoped(ast) {
  "the same question the twin without the suffix answers — which mentions nothing in this file binds — but asked mention by mention instead of name by name. A name bound in one function and used in another is bound for the first and free for the second; the twin sees the binding, calls the name covered, and misses the ReferenceError in the second. Here a mention counts as covered only when a scope around that mention binds it.";
  "Four things once made it over-report and are now closed: a catch clause is a scope, a named function expression binds its own name inside itself, the list of language and host globals it forgives covers the ones the repo actually reaches for, and an import counts however it was written rather than only in the repo's own relative shape. What is left is a name nothing supplies, which is what a runtime would call an error. Anything it still names beyond that is a global this list has not met yet, so add it there rather than teaching a caller to ignore it.";
  let names = js_identifiers_referenced_names(ast);
  let imports = js_imports_local_names(ast);
  let globals = js_global_names();
  let name = js_flo_name(ast);
  let supplied = list_concat_multiple([imports, globals, [name]]);
  ("Which names have a mention nothing binds is asked once for the whole file rather than once for each name. Asking name by name walked the whole tree again every time, and a file binds seven or eight names of its own: measured 2026-08-11 across this repo that was sixty-four seconds, the largest single thing in the gate for names nothing supplies. One walk knows about all of them, because the walk is already holding the scopes around each mention.");
  let unbound = js_names_unbound_mentioned(ast);
  function free_is(candidate) {
    let covered = list_includes(supplied, candidate);
    if (covered) {
      return false;
    }
    let any = set_includes(unbound, candidate);
    return any;
  }
  let free = list_filter(names, free_is);
  return free;
}
