import { js_binding_names } from "./js_binding_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_set_intersect } from "./list_set_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_binding_names_shadowing(
  ast,
  own_name,
  function_names_known,
) {
  "the module's own bindings that reuse the name of a repo function — inside this file that identifier no longer means the function, so a reader who knows the name is misled and a later line that meant to call it gets a local value instead. own_name is excluded: a function file binds its own name legitimately.";
  "The names to cross against arrive as a set already gathered rather than as a list, because a sweep asks this once per file and the second side never changes between the asks. As a list each of a file's seven bindings was searched for through fifteen thousand names: measured 2026-08-11 over eight thousand files that was thirteen seconds, and the same answer off one set is ten milliseconds.";
  let names = js_binding_names(ast);
  let unique = list_unique(names);
  let shadowing = list_set_intersect(unique, function_names_known);
  let offenders = list_difference(shadowing, [own_name]);
  return offenders;
}
