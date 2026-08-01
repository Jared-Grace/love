import { property_path_get_2 } from "./property_path_get_2.mjs";
import { each } from "./each.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_imports_local_names(ast) {
  "every name an import line binds in this file, whatever shape it was written in: the named form, the default form, and the whole-module form all bind a local name the code below can read. The twin without the suffix answers a narrower question - the repo's own one-name-per-line relative imports, the only shape its add and remove passes may touch - so a reader asking what is BOUND must come here, and a writer asking what may be REWRITTEN must go there.";
  function lambda(collect) {
    function declaration_each(found) {
      let specifiers = property_path_get_2(found, "node", "specifiers");
      function specifier_each(specifier) {
        let name = property_path_get_2(specifier, "local", "name");
        collect(name);
      }
      each(specifiers, specifier_each);
    }
    let declarations = js_imports_all(ast);
    each(declarations, declaration_each);
  }
  let names = list_adder_unique(lambda);
  return names;
}
