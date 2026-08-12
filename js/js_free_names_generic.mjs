import { js_catch_clause_names_all } from "./js_catch_clause_names_all.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_free_names_generic(node, bound_also) {
  "The names read inside something that nothing inside it binds - not declared there, not handed to it, not caught by it, not a word JS already answers to";
  "Four of the five ways a name can be bound are read off the node itself and are the same wherever the question is asked. The fifth depends entirely on what is being asked about, and is handed in: a whole module binds by importing, while a lone declaration binds by being the very function whose name is written. Neither can be read off the other, which is why the two are separate questions at all - and everything else about them was the same, which is why they are one run of work here";
  "Nothing is said here about which reading is the right one for a caller. That belongs to the two named questions above this, and the difference between them is now exactly the one argument";
  let referenced = js_identifiers_referenced_names(node);
  let names = js_declared_names(node);
  let names2 = js_function_params_all(node);
  ("A caught error is bound by neither of the two lists above - it is not declared and it is not written in a parameter list - so it is asked for on its own");
  let names3 = js_catch_clause_names_all(node);
  let names4 = js_global_names();
  let bound = list_concat_multiple([bound_also, names, names2, names3, names4]);
  let free = list_difference(referenced, bound);
  return free;
}
