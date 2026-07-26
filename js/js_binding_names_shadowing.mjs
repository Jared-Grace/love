import { js_binding_names } from "./js_binding_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_binding_names_shadowing(ast, own_name, function_names) {
  "the module's own bindings that reuse the name of a repo function — inside this file that identifier no longer means the function, so a reader who knows the name is misled and a later line that meant to call it gets a local value instead. own_name is excluded: a function file binds its own name legitimately.";
  let names = js_binding_names(ast);
  let unique = list_unique(names);
  let shadowing = list_intersect(unique, function_names);
  let offenders = list_difference(shadowing, [own_name]);
  return offenders;
}
