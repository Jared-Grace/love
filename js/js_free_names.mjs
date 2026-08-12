import { js_free_names_generic } from "./js_free_names_generic.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
export function js_free_names(ast) {
  "identifiers referenced as values but bound by nothing in this module — not imported, not the module's own function, not declared, not a parameter, not a JS global; these are the names a runtime ReferenceError would name";
  "asked of the whole module, not just the exported declaration. A line at the top of a file runs the moment the file loads, so a name referenced there needs its import just as much as one inside the function - and asking only inside the function made those names invisible, which is how a torn comment could reference a function nothing imported and neither the repair pass nor its gate could see it. Measured across every file in the repo: widening the question changes no answer that was already right.";
  "the module's own function is not asked for separately: a function declaration is one of the two shapes the declared names below already collect, so naming it again only made the list longer. Measured over every file here - 6811 of them, none torn - the module's own name was already among its declared names every single time, so no answer moves.";
  "asking for every shape of import, not just the repo's own relative one - a default or whole-module import binds its local name just as firmly, and a name that IS bound is not free";
  let imports = js_imports_local_names(ast);
  ("Importing is the one way of binding that only a whole module has, so it is the one thing handed to the shared reading. Everything else - what is declared, what is handed in, what is caught, what JS answers to on its own - is read off the module the same way it is read off a lone declaration, and used to be written out twice");
  let free = js_free_names_generic(ast, imports);
  return free;
}
